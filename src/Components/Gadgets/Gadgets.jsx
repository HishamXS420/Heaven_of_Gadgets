import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory , setSelectedCategory] = useState('All Products'); // Initially all products will be shown on the site



  useEffect(() => {
    fetch('/gadgets.json')
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

// To tell which state the site is in right now according to the button clicked
  const handleCategoryChange = (category) => 
    {
        setSelectedCategory(category);
    }

    const filteredGadgets = selectedCategory === 'All Products' ? gadgets : gadgets.filter(gadget => gadget.category === selectedCategory);



  return (
    <div className="mt-20 flex flex-col">
        <div>
            <h2 className="text-4xl font-bold text-center mb-14 text-purple-700">Explore Cutting-Edge Gadgets</h2>
        </div>
        <div>
        <div className="flex flex-row">
            <div className="flex flex-col gap-6 bg-gray-100 p-4 pt-8 h-93 rounded-2xl">
            <button onClick={() => handleCategoryChange('All Products')} className={`rounded-2xl border-1 p-2 w-36 font-semibold outline-none focus:ring-0 ${selectedCategory==='All Products' ? "bg-purple-700 text-white" : " bg-white hover:bg-purple-200"}`}>All Products</button>
            <button onClick={() => handleCategoryChange('Laptops')}  className={`rounded-2xl border-1 p-2 w-36 font-semibold ${selectedCategory==='Laptops' ? "bg-purple-700 text-white" : " bg-white  hover:bg-purple-200"}`}>Laptops</button>
            <button onClick={() => handleCategoryChange('Smartphones')}  className={`rounded-2xl border-1 p-2 w-36 font-semibold ${selectedCategory==='Smartphones' ? "bg-purple-700 text-white" : " bg-white  hover:bg-purple-200"}`}>Phones</button>
            <button onClick={() => handleCategoryChange('Smartwatches')}  className={`rounded-2xl border-1 p-2 w-36 font-semibold ${selectedCategory==='Smartwatches' ? "bg-purple-700 text-white" : " bg-white  hover:bg-purple-200"}`}>Smart Watches</button>
            <button onClick={() => handleCategoryChange('Accessories')}  className={`rounded-2xl border-1 p-2 w-36 font-semibold ${selectedCategory==='Accessories' ? "bg-purple-700 text-white" : " bg-white  hover:bg-purple-200"}`}>Accessories</button>
             </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"> 
            {/* w-full necessary to make the text in the middle */}
            

            {/* /The col-span-full class is used in Tailwind CSS to make an element span across all columns in a grid layout. This is particularly useful when you want an element, such as a message or a banner, to take up the full width of the grid, regardless of the number of columns.

In your case, it is used to make the "No data found" message span across all columns when there are no gadgets to display in the selected category. */}
            {// For showing no data found in the accessories tab
                filteredGadgets.length > 0 ?
                filteredGadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>) : <div className="col-span-full flex justify-center items-center flex-col"> <h1 className="font-semibold text-red-800  text-center items-center text-3xl">No data found</h1></div>
            }
    </div>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
            }
    </div> */}
        </div>
       
        </div>
       
    </div>
    
  );
};

export default Gadgets;
