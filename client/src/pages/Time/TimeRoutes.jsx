

const TimeRoutes =()=>{

    return(
        <>
                    <Routes>
        {/* <Route path='/'   element={Main} /> */}
             <Route path='/time'   element={<Products/>} />
             <Route path='/time/create'   element={<ProductCreate/>} />
             <Route path='/time/:id/edit'   element={<ProductEdit/>} />
             </Routes>
         </>
    )
}