export default  function RootLayout({children}:{
    children: React.ReactNode
}
    ){

    return <div>
        <div className="border-b p-1"> 
            Signup now and get all 20% off
        </div>
        {children}
    </div>
    
} 