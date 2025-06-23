import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";
import Card from "@/assets/images/card.svg"
import Klarna from "@/assets/images/Klarna..svg"
import Coinbase from "@/assets/images/coinbase.svg"
import Instacart from "@/assets/images/instacart.svg"
import Transferencia from "@/assets/images/icones.svg"
import Grafico from "@/assets/images/grafico.svg"
import { BsCreditCardFill } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";

import "./home.css"
import OutlinedButton from "@/components/Buttons/OutlinedButton";

const Home = () => {
    return (
        <main>
            <section className="first-screen">
                <article className="first-container">
                    <h1>Get paid early</h1>
                    <p className="sample-text">save automatically all your pay</p>
                    <div className="subtitle">
                        <p>Supports small business with simple invoicing powerful integrations, and cash flow management tools</p>
                    </div>
                    <div>
                        <input className="input-email" type="text" placeholder="Your business email" />
                        <PrimaryButton buttonName={"Get Started"} />
                    </div>
                    <div className="companys-names">
                        <Image src={Klarna} width={130} />
                        <Image src={Coinbase} width={150} />
                        <Image src={Instacart} width={150} />
                    </div>
                </article>
                <figure className="second-container">
                    <Image src={Card} className="card-image" />
                </figure>
            </section>
            {/* Payments */}
            <section className="payments">
                <div className="payments-content">
                    <h4>FUTURE PAYMENT</h4>
                    <div className="phrases">
                        <div className="main-phrase">
                            <p>Experience that grows with your scale.</p>
                        </div>
                        <div className="call-to-action">
                            <div className="text">
                                <p>Design a financial operating system that works for your business and streamline cash flow management</p>
                            </div>
                        </div>
                    </div>

                    <div className="features">
                        <article>
                        <BsCreditCardFill size={40} fill="#2A8F9E" className="icon"/>
                        <h4>Free transfers</h4>
                        <p>Create a financial experienceay and automate repeat purchases by scheduling recurring payments</p>
                    </article>
                    <article>
                        <BsBank2 size={40} fill="#2A8F9E" className="icon"/>
                        <h4>Multiple account</h4>
                        <p>Run your operations with cash from your account and generate yield on funds store in your account</p>
                    </article>
                    <article>
                        <BsShieldShaded size={40} fill="#2A8F9E" className="icon"/>
                        <h4>Unmatched security</h4>
                        <p>Securely manage your finances with organization-wide MFA, card-locking, and account level controls</p>
                    </article>
                </div>
                </div>
            </section>
            <section className="benefits">
                <article className="benefits-title">
                    <h2>WHY US</h2>
                    <h3>Why they prefer Finpay</h3>
                </article>
                
                <article className="card">
                    <h4>3k+</h4>
                    <h5>Business already running on Finpay</h5>
                </article>
                <article className="card">
                    <h5>Instant Withdraw your funds at any time</h5>
                    <div className="image">
                        <Image src={Transferencia} width={300}/>
                    </div>
                </article>
                <article className="card returns">
                    <div className="returns-title">
                        <h5>No asset volatility</h5>
                        <p>Generate returns on your cash reserves without making any investments</p>
                    </div>
                    <div>
                        <Image src={Grafico} width={700}/>
                    </div>
                </article>
            </section>
            <section className="steps">
                <div className="steps-content">
                    <div className="steps-title">
                        <span>STEP</span>
                        <h2>Maximize your returns with a Reserve account that generates</h2>
                    </div>
                    <div className="steps-cards">
                        <article>
                            <span>1</span>
                            <h3>Open your account</h3>
                            <p>Sing up to finpay and set up your account from the dashboard</p>
                        </article>
                        <article>
                            <span>2</span>
                            <h3>Transfer your money</h3>
                            <p>Move money from to another account into and start to earning up</p>
                        </article>
                        <article>
                            <span>3</span>
                            <h3>Watch your balance grow</h3>
                            <p>Accessed instantly and remain insulated from market volatility</p>
                        </article>
                    </div>
                </div>
            </section>
            <section  className="mission">
                <span>OUR MISSION</span>
                <h2>We`ve helped innovative companies</h2>
                <p>Hundreds of all sizes and across all industries have made a big improvements with us</p>
                <div className="results">
                    <article>
                        <span>24%</span>
                        <p>Revenue business</p>
                    </article>
                    <article>
                        <span>180K</span>
                        <p>In annual revenue</p>
                    </article>
                    <article>
                        <span>10+</span>
                        <p>Months of runway</p>
                    </article>
                </div>
                <div className="plan">
                    <div className="plan-title">
                        <span>CHOSE PLAN:</span>
                    </div>
                    <article>
                        <h3>Plus</h3>
                        <p>£2.99/month</p>
                    </article>
                    <article>
                        <h3>Premium</h3>
                        <p>£6.99/month</p>
                    </article>
                </div>
            </section>
            <section className="try">
                <div>
                    <span>TRY IT NOW</span>
                    <h2>Ready to level up your payment process?</h2>
                    <p>Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
                </div>
                <div className="try-buttons">
                    <PrimaryButton buttonName={"Get Started Now"}/>
                    <OutlinedButton buttonName={"Learn More"} color={"white"}/>
                </div>
            </section>
        </main>
    )
}

export default Home;