import React,{ useState, useEffect }  from 'react';



function Slides({slides}) {
    const [index,setIndex]=useState(0);
     
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={() => setIndex(0)} disabled={index==0?true:false} className="small outlined">Restart</button>
                <button data-testid="button-prev" onClick={() => setIndex(index-1)} disabled={index==0?true:false} className="small">Prev</button>
                <button data-testid="button-next" onClick={() => setIndex(index+1)} disabled={index==slides.length?true:false} className="small">Next</button>
            </div>
         <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index] && slides[index].title}</h1>
                <p data-testid="text">{slides[index] && slides[index].text}</p>
    </div>
        </div>
    );

}

export default Slides;
