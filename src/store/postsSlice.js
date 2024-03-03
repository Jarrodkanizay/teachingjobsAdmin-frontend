import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  filter1: [],
  employer: { employer_id: 0, company_name:'',logo: '' },
  job: { description: '', employer_id: 0 },
  status: 'dangerTest',
  id: 0,
  darkMode: 'light',
  searchText: '',
  searchJobCriteria: {},
  region: 'Global',
  jobCredits: 0,
  priorityCredits: 0,
  socialCredits: 0,
  invoiceId:0,
  email: '',
  userid: 0,
  productid: 1,
  productQty: 1,
  priorityQty: 1,
  socialQty: 1,
  addOnYN: false,
  priorityAddOn: false,
  socialAddOn: false,
  cartTotalAmount: 0,
}
const postsSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    toggleAddOnYN: (state) => {
      state.addOnYN = !state.addOnYN;
    },
    togglePriorityAddOn: (state) => {
      state.priorityAddOn = !state.priorityAddOn;
    },
    toggleSocialAddOn: (state) => {
      state.socialAddOn = !state.socialAddOn;
    },
    setEmail(state, action) {
      state.email = action.payload
    },
    decreaseCart: (state, action) => {
      state.productQty = state.productQty - 1 || 1
      state.priorityQty = state.productQty
      state.socialQty = state.productQty

    },
    increaseCart: (state, action) => {
      state.productQty = state.productQty + 1
      state.priorityQty = state.productQty
      state.socialQty = state.productQty
    },
    decreaseSocialQtyCart: (state, action) => {
      state.socialQty = state.socialQty-1 || 1
    },
    increaseSocialQtyCart: (state, action) => {
      state.socialQty = state.socialQty + 1
    },
    decreasePriorityQtyCart: (state, action) => {
      state.priorityQty = state.priorityQty-1 || 1
    },
    increasePriorityQtyCart: (state, action) => {
      state.priorityQty = state.priorityQty + 1
    },
    setJobCredits(state, action) {
      state.jobCredits = action.payload
    }, 
    setproductid(state, action) {
      state.productid = action.payload
    },
    setfilter(state, action) {
      state.filter1 = action.payload
    },
    setSearchJobCriteria(state, action) {
      state.searchJobCriteria = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    setId(state, action) {
      state.id = action.payload
    },
    setRegion(state, action) {
      state.region = action.payload
    },
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setJob(state, action) {
      state.job = action.payload
    },
    setEmployer(state, action) {
      state.employer = {
        ...state.employer,  
        ...action.payload   
      };
    },
    setTtsSpeed(state, action) {
      state.ttsSpeed = action.payload
    },
    setDarkMode(state) {
      state.darkMode = state.darkMode == 'light' ? 'dark' : 'light'
    },
    setStatusId(state, action) {
      console.log(action.payload)
      state.id = action.payload.id
      state.status = action.payload.status
    },
  },
})

export const {
  increasePriorityQtyCart,
  decreasePriorityQtyCart,
  increaseSocialQtyCart,
  decreaseSocialQtyCart,
  togglePriorityAddOn,
  toggleSocialAddOn,
  toggleAddOnYN,
  increaseCart,
  decreaseCart,
  setEmail,
  setproductid,
  setJobCredits,
  setfilter,
  setRegion,
  setEmployer,
  setSearchJobCriteria,
  setJob,
  setStatus,
  setId,
  setStatusId,
  setDarkMode,
  setSearchText,
  setFilter,
} = postsSlice.actions

export default postsSlice.reducer
