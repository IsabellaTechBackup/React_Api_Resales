import React from 'react'
import { Link,Switch, Route, Redirect } from 'react-router-dom'

export const DashboardRouter = () => {
    return (
        <>
           
           <div>
               <Switch>
                    <Route exact path="/house/:id" component={ Single }></Route>
                    <Redirect to="/" />
               </Switch>
           </div> 
        </>
    )
}
