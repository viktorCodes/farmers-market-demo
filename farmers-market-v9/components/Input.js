

function Input() {
   
   // const [input, setInput] = useState("");


  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
   <img
          src="C:\Users\VICTOR\farmers-market-v9\farmers-market-v9\public\logo144.png"           //{session.user.image}
          alt=""
          className="h-11 w-11 rounded-full cursor-pointer"
        />

        <div className="w-full divide-y divide-gray-700">
            <div className={``}>

                <textarea  rows="2"></textarea>


            </div>

        </div>

    </div>
  )
}

export default Input