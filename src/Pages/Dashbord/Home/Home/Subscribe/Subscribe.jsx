
const Subscribe = () => {
    return (
       <div className="bg-slate-50 mt-40 mb-5 ">
         <div className="max-w-7xl mx-auto text-center py-12 space-y-2">
            <p className="text-4xl font-bold">Went to get special offers <br />
and Course updates?</p>

<div>
<div className="w-1/2 mx-auto my-7">
  <label htmlForfor="hs-trailing-button-add-on" className="sr-only">Label</label>
  <div className="flex rounded-md shadow-sm">
    <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
    <button type="button" className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
      Subscribe Now
    </button>
  </div>
</div>

</div>
        </div>
       </div>
    );
};

export default Subscribe;