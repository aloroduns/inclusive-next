import React from 'react'
import Image from 'next/image'
import styles from './styles/Main.module.css'
import Chat from '../../assets/images/Chat.png'
import Group from '../../assets/images/Group.png'
import Guide from '../../assets/images/Guide.png'
import Puzzle from '../../assets/images/Puzzle.png'
import Library from '../../assets/images/Library.png'
import Button from 'components/CustomButtons/Button.js';

export default function Main() {
    return (
        <section className={styles.MainContainer}>
            <div className="S1">
            <div className="WhoWrapper">
                    <Image 
                    src={Chat} 
                    alt= 'Two females sitting shaking hands chatting'
                    // className={styles.Chatty}
                    />
                    <div className= {styles.WhoWeAre}>
                        <h2 className={styles.Who}>Who We Are</h2>
                        <p className={styles.WhoText}>Inclusive is a nonprofit in NYC that strives to make life for families with kids with intellectual and developmental disabilities a bit easier.  

We want everyone to benefit from our services. We help people find speech, physical, occupational therapy, and other providers and activities for their kids. 

Our guide to services shows families all the resources available to them and advises them on how to overcome the roadblocks they may face. Inclusive has created a comprehensive database of providers so that parents can find the best specialists for their kids.</p> 
                    </div>
                </div>
            </div>


        <section className="S2">
            <div className="SecondContainer">
                <div className={styles.WhatWrapper}>
                <Image src={Group} />
                <div className={styles.WhatWeAre}>
    
                    <h2 className={styles.What}>What We Do</h2>
                    <p className={styles.WhatText}>Outreach, workshops and training, and live phone support are a few ways Inclusive assists those with I/DD.</p>
                        
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.S3}>
            <div className="ThirdContainter">
                <div className="ResWrapper">
                    <div className="Resources">
                    <h2 className={styles.RTitle}>Resources</h2>
                        <p className={styles.RText}>Here are a few ways Inclusive makes the healthcare journey easier. </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="S4">
            <div className="CardContainer">
                <div className={styles.CardWrapper}>

                    <div>
                        <div className={styles.Card}>
                            <Image src={Library} />
                            <div className={styles.CardContent}>
                                <h3 classname={styles.CardTitle1}>Guide to Services</h3>
                                <p className={styles.CardText1}>The resource directory is a searchable database  of speech therapy providers, services, and local resources.</p>
                            </div>
                        </div>
                    </div>
                    

                    <div>
                        <div className={styles.Card}>
                            <Image src={Guide} />
                            <div className={styles.CardContent}>
                                <h3 classname={styles.CardTitle2}>Resource Directory</h3>
                                <p className={styles.CardText2}>The guide to services shows the entire journey, from request to service, and describes each step in detail.</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className={styles.Card}>
                            <Image src={Puzzle} />
                            <div className={styles.CardContent}>
                                <h3 classname={styles.CardTitle3}>Online Portal</h3>
                                <p className={styles.CardText3}>The guide to services shows the entire journey, from request to service, and describes each step in detail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="S5">
            <div className="FourthContainer">
                <div className="SubWrapper">
                    <div className="Subscribe">
                        <h2 className={styles.SubTitle}>Subscribe to Our Newsletter</h2>
                        <p className={styles.SubText}>To learn about updated services and new providers.</p>

                        <label className={styles.name}>Fullname</label>
                        <label className={styles.EmailText}>Email</label>
                        <input className={styles.InputField} type="input" name="fullname" placeholder="John Doe" required/>
                        <input className={styles.InputField} type="email" name="email" placeHolder="example@email.com" required/>
                        <button type="button" color="subscribe">Subscribe</button>
                    </div>
                </div>
            </div>

        </section>









        </section>
    
        
    
    
    
    
    
    
    
     )
}





