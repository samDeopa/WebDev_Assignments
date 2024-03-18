
export function Profile(){
    return <div style={{boxShadow:'0 0 10px 5px #80808091', borderRadius: '40px', width:'fit-content', borderRadiun:'40px' ,margin:'10px auto'}}>
                <div style={{  borderRadius: '40px 40px 0 0 ',height:'150px', width: '400px',  'backgroundColor':'blue'} }>
                </div> 
                <div style={{ display:'flex', flexDirection:'column', position:'relative',top:'-50px',alignItems:'center', borderRadius: '40px 40px 0 0', height:'282px', width: '400px'} } >
                <div ><img src="https://cohort-react-assignment.vercel.app/assets/avatar-v63tTIJU.png" style={{borderRadius: '90px', height:'90px', width:'90px'}} alt=""/></div>
                <div>Sam</div>
                <div style={{marginBottom:'50px'}}>New Delhi</div>
                <hr style={{width:'85%'}}></hr>
                    
                <div style={{display: 'flex',textAlign: 'center',gap: '100px'}}>
                    <div><p>80K</p>
                    <p>followers</p>
                    </div><div>
                    <p>803K</p>
                    <p>Likes</p>
                    </div><div>
                    <p>1.4K</p>
                    <p>Photos</p>
                    </div>
                </div>
                </div>
                

            </div>
            }