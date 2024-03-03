/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BV174gpUMV1
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-4">Purchase Job Postings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Customer Information</h2>
              <div className="mb-4">
                <Button className="w-full mb-2" variant="secondary">
                  Returning User: Sign In
                </Button>
                <Input placeholder="Email" />
              </div>
              <Button className="w-full">Continue with Posting</Button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Company Information</h2>
              <Input placeholder="First Name*" />
              <Input className="mt-4" placeholder="Last Name*" />
              <Input className="mt-4" placeholder="Email*" />
              <Input className="mt-4" placeholder="Company Name*" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Billing Information</h2>
          </div>
          <div className="bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Items in Your Cart</h2>
            <div className="flex justify-between items-center mb-4">
              <Select>
                <SelectTrigger id="jobPostings">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
              <span className="font-semibold">Job Postings $495.00 each</span>
              <span className="font-semibold">$495.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <Input defaultChecked id="noFeature" name="feature" type="radio" value="no" />
              <label className="font-semibold" htmlFor="noFeature">
                No
              </label>
              <span className="font-semibold">Feature $99.00 each</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>$495.00</span>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Buy in bulk and save</h2>
              <div className="mb-2">
                <span className="font-semibold">Price per 30 day job posting</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>1</span>
                <span>$495.00 each</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>2</span>
                <span>$429.00 each</span>
              </div>
              <div className="flex justify-between">
                <span>3</span>
                <span>$399.00 each</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Technology Professionals</h3>
            <Link className="block" href="#">
              Search for Jobs
            </Link>
            <Link className="block" href="#">
              Jobs Directory
            </Link>
            <Link className="block" href="#">
              Search for Companies
            </Link>
            <Link className="block" href="#">
              Company Directory
            </Link>
            <Link className="block" href="#">
              Career Advice
            </Link>
            <Link className="block" href="#">
              Career Events
            </Link>
            <Link className="block" href="#">
              Career Development Resources
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2">Employers and Recruiters</h3>
            <Link className="block" href="#">
              Post Jobs
            </Link>
            <Link className="block" href="#">
              Find Candidates
            </Link>
            <Link className="block" href="#">
              Employer Brand & Advertising
            </Link>
            <Link className="block" href="#">
              Hiring Events
            </Link>
            <Link className="block" href="#">
              Sourcing Services
            </Link>
            <Link className="block" href="#">
              Partnerships
            </Link>
            <Link className="block" href="#">
              Recruiting Advice
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company Information</h3>
            <Link className="block" href="#">
              About Us
            </Link>
            <Link className="block" href="#">
              Media
            </Link>
            <Link className="block" href="#">
              Media Kit
            </Link>
            <Link className="block" href="#">
              Work at Dice
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <Link className="block" href="#">
              Contact Sales
            </Link>
            <Link className="block" href="#">
              Contact Support
            </Link>
            <Link className="block" href="#">
              Support
            </Link>
          </div>
        </div>
        <div className="container mx-auto text-center mt-6">
          <Link className="inline-block" href="#">
            <img
              alt="Dice logo"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "80/24",
                objectFit: "cover",
              }}
              width="80"
            />
          </Link>
          <p className="text-sm mt-4">© 1990 - 2023 Dice. All Rights Reserved. Dice is a DHI service.</p>
          <div className="mt-2">
            <Link className="inline-block text-sm mr-4" href="#">
              Terms & Conditions
            </Link>
            <Link className="inline-block text-sm mr-4" href="#">
              Privacy Policy
            </Link>
            <Link className="inline-block text-sm mr-4" href="#">
              Do Not Sell My Personal Information
            </Link>
            <Link className="inline-block text-sm" href="#">
              CCPA
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

