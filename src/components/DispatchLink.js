import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegion } from '../store/postsSlice';
const DispatchLink = ({ to, region, children, setDropdown, setIsNavOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setRegion(region));
        navigate(to);
        setDropdown(false); 
        setIsNavOpen(false); 
    };

    return <button onClick={handleClick}>{children}</button>;
};

export default DispatchLink;

