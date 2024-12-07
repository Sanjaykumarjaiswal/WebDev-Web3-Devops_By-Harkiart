
function App() {
  return (
    <div style={{backgroundColor:"#dcdde1", height:"100vh"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        </div>
        </div>
    </div>
  )
}
const style={
  width:200,
  backgroundColor:"white",
  borderRadius:10,
  borderColor:"#f5f6fa",
  borderWidth:1,
  marginLeft:10,
  padding:20,
  
}
function PostComponent(){
  return(
    <div style={style}>
      <div style={{display:"flex",}} >
        <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
        width:50,
        height:50,
        borderRadius:40
          }} />
          <div style={{fontSize:15,marginLeft:12 }}>
            <b>100xdevs</b>
            <div>23,333 followers</div>
            <div>12m</div>
          </div>
      </div>

      <div>
        Want to know how to win big? Check out how these folks won $5000 in bounties.
      </div>  
    </div>
  )
} 
export default App
 