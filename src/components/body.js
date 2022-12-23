/* eslint-disable import/no-anonymous-default-export */
export default function(akshith){
    console.log(akshith)
    return(
        <div>
        {
          akshith.data.map((image)=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
        </div>
        )

}