import "./Progressbar.css"

function Progressbar(props) {

    console.log(props.data.stack, props)

    const progress = {
        width: `${props.data.percent}%`
    }

  return (
    
    <div className="progressbar">
            <h1>{props.data.stack}</h1>
            <div className="progress">
                <div className="progressvalue" style={progress}><p>{props.data.percent}%</p></div>
            </div>
            {/* <div className='progressBar w-11/12 h-1 rounded-lg overflow-hidden bg-slate-200'>
      <div style={{width: pageNo === 0? "20%": pageNo === 1 ? "40%" : pageNo === 2 ? "60%" : pageNo === 3 ? "80%": "100%"}} className='progress bg-emerald-500 h-full'></div>
    </div> */}
    </div>
  )
}

export default Progressbar