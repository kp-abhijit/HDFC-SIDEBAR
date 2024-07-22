import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styles from "./page.module.scss"

const page = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.info}>
                <h1>Privacy Policy</h1>
                <p>"Sebi circular dated October 12. 2023, has specified the Risk Management Framework at KRAs (KYC Registration Agencies) wherein the attributes for verification by KRAs have been mentioned. Based on the feedback received from the stakeholders in the securities market and for ease of transacting by clients, the provisions of the Master Circular dated October 12, 2023, have been reviewed and it has been decided to simplify the risk management framework," the markets regulator said in an official release.</p>
                <p>We may collect following information from you, as you have disclosed to us:</p>
                <ul>
                    <li>Personal details (e.g. name, contact details including, phone number, residential address, date of birth, documents such as identity card / passport details / Aadhar details / PAN / Voter ID / driving license, and / or education details) provided by you to us to avail various services from us;</li>
                    <li>Your details including transaction history, balances and payment details, for effecting transfer of monies through various payment channels facilitated by us;</li>
                    <li>Financial details (e.g. income, expenses, and / or credit history) needed as a part of request for some of our products / services;</li>
                    <li>Images of documents / photos required to avail any of our products / services;</li>
                    <li>Voice recordings of conversations of you with our customer care agent, to address your queries / grievances;</li>
                    <li>Employment details (e.g. occupation, positions held, employment history, salary and / or benefits) as part of our record retention for credit / various product evaluations or as required under Applicable Laws including Prevention of Money Laundering (Maintenance of Records) Rules, 2005;</li>
                    <li>Specimen signature(s) or consent for processing of your instructions received by us through our various payment and delivery channels;</li>
                    <li>Opinions provided by you to us by way of feedback or responses to surveys;</li>
                    <li>Information obtained from your mobile device by way of using our app like device location, communication information including contacts and call logs, device information (including storage, model and mobile network), transactional and promotional SMS / App notifications.</li>
                </ul>
                <p>
                You hereby agree that, we may fetch or update your personal details from government agencies or regulated authorities like KYC Registration Agency's, Central Registry of Securitization Asset Reconstruction and Security Interest, Asset Management Company's, Registrar and Transfer Agency's, etc.
                </p>
                <p>We shall not sell your personal information to any third party. However under certain conditions we would share this information:</p>
                <ul>
                    <li>We share information as part of normal business operations, such as providing you with any services to which you subscribe, and any activity related to these services such as collecting fees for those services, and informing you about these services; as part of normal legal/regulatory purposes required by the Securities and Exchange Board of India and other regulatory and government entities, and</li>
                    <li>We may occasionally invite selected third parties to participate in offers we feel would be attractive to customers of HDFC Securities customers.</li>
                </ul>
                <p>It may become necessary for HDFC Securities to disclose your personal information to our agents and contractors, or to their subcontractors. However these parties would be required to use the information obtained from HDFC Securities for such use exclusively.</p>
                <p>
                Your account information is protected by placing it in the secure portion of our Web site, which is why you need to enter your unique login username and password each time you want to access your account information.
                </p>
                <p>
                Do help us protect your privacy by maintaining the secrecy of the username and password you use for any of our services.
                </p>
                <p>Please note that this privacy policy does not create any contractual or other legal rights in or on behalf of any party, nor is it intended to do so.</p>
            </div>
        </div>
    )
}

export default page