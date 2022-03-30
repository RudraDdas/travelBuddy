import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="sub_section">
                <h2>About us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis libero facere non possimus cumque hic eius doloribus dolore necessitatibus porro?</p>
            </div>
            <div className="sub_section">
                <h2>News letter</h2>
                <p>stay updated with our letter</p>
                <input type="email" placeHolder='Email'/><button><i class="fas fa-angle-right"></i></button>
            </div>
            <div className="sub_section2">
                <div className="sub_div">
                   <img src={'https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM'} alt="" />
                </div>
                <div className="sub_div">
                   <img src="https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM" alt="" />
                    
                </div>
                <div className="sub_div">
                   <img src="https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM" alt="" />
                    
                </div>
                <div className="sub_div">
                   <img src="https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM" alt="" />
                    
                </div>
                <div className="sub_div">
                   <img src="https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM" alt="" />
                    
                </div>
                <div className="sub_div">
                   <img src="https://www.google.com/search?q=image&rlz=1C1CHBF_enIN839IN839&sxsrf=ALeKk018xS7DgXmN8nIrC4bgbR2R5t2ksA:1625242201263&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwjqo9GA48TxAhUegv0HHZlCCLYQ9QF6BAgPEAE#imgrc=2DNOEjVi-CBaYM" alt="" />
                    
                </div>
            </div>
            <div className="sub_section social_icons">
              <h2>follow us on</h2>
              <p> <i class="fab fa-facebook-square"></i><i class="fab fa-instagram"></i><i class="fab fa-youtube"></i><i class="fab fa-twitter"></i></p>
            </div>

        </div>
    )
}

export default Footer
