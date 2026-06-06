import Link from "next/link"
import Head from "next/head"
import Layout from '/components/layout'
import stylesWork from '/styles/work.module.css'


export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Research Work</title>
            </Head>
            <h1 className={stylesWork.heading}>A Stochastic SIR Model on Covid-19 Data, Bachelor Thesis</h1>
            <h3> Abstract </h3>
            <p>
                The recent increase in the rate of Emerging Infectious Diseases, such as the COVID-19
                pandemic, has made it clear that understanding the behavior of such diseases and devising
                methods to control them are of utmost importance. This emphasizes the need for mathematical models that can predict the spread of such diseases. Although researchers have been
                using deterministic models such as the SIR models to study these infections for decades,
                they are not fully able to capture today’s fast-paced world full of uncertainties. Thus, we
                need to focus on stochastic models, which can capture this randomness efficiently. This
                study proposes a comparative analysis between deterministic and stochastic SIR(SSIR)
                models with emphasis on stochastic formulations based on Itô and Stratonovich calculus.
                Using publicly available COVID-19 data for India, the Stratonovich variation of the model,
                which has not extensively been studied, is used to calculate values of SIR model parameters.
                <a href="https://drive.google.com/file/d/16QZTeU7_pDLvo6Pblm04qHdTgx9Cw3Sk/view?usp=sharing"> Full thesis.</a>
            </p>
        </Layout>
       
    );
}
