import React from "react";

const Navbar = () => {

    const [dropDown,setDropDown] = React.useState(false)

    const [companyDown, setCompanyDown] = React.useState(false)
    
    const togglecompany = () => {
        setCompanyDown(!companyDown)
    }

    const toggleDown = () => {
        setDropDown(!dropDown);
    }

    return(
        <nav className="flex-row">
           <div className="flex-row" >
                <div><img src="../../images/logo.svg" alt="logo" className="logo"/></div>
                <div className="flex-row">
                    <ul>
                        <li className="features" onClick={toggleDown}>
                            Features
                            <img src="../../images/icon-arrow-up.svg" alt="arrow-up" className="arrow-up"/>
                            {dropDown && (
                                <div className="features-box">
                                    <div>
                                        <img src="../../images/icon-todo.svg" alt="todo" className="features-icon"/>
                                        <p>Todo List</p>
                                    </div>
                                    <div>
                                        <img src="../../images/icon-calendar.svg" alt="calendar" className="features-icon"/>
                                        <p>Calendar</p>
                                    </div>
                                    <div>
                                        <img src="../../images/icon-reminders.svg" alt="reminders" className="features-icon"/>
                                        <p>Reminders</p>
                                    </div>
                                    <div>
                                        <img src="../../images/icon-planning.svg" alt="planning" className="features-icon"/>
                                        <p>Planning</p>
                                    </div>
                                </div>
                            )}
                            
                        </li>
                        <li className="company" onClick={togglecompany}>
                            Company
                            <img src="../../images/icon-arrow-up.svg" alt="arrow-up" className="arrow-up"/>
                            {companyDown && (
                                <div className="company-box features-box">
                                    <p>History</p>
                                    <p>Our Team</p>
                                    <p>Blog</p>
                                </div>
                            )}
                           
                        </li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                    
                   
                </div>
            </div> 
            <div className="flex-row login">
                <p>Login</p>
                <a href="*" className="register-btn">Register</a>
            </div>
        </nav>
    )
}
export default Navbar;