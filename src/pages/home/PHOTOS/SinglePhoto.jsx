
export const SinglePhoto = ({Image}) => {
  return (
    <>
    
    
    <div className="col-lg-3">
        <div className="card border-0 my-2 rounded-3">
            <img className="rounded-3" width={'100%'} style={{objectFit:'cover'}} src={Image} alt="" />
            

        </div>
    </div>
    
    </>
  )
}
