import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.jpg';
import bg2 from './Media/bg2.jpg';
import fgroup from './Media/fgroup.png'
import arvind from './Media/arvind.png'
import multiples from './Media/multiples.png'
import amazon from './Media/amazon.jpg'
import nse from './Media/nse.png'
import arvindfashion from './Media/arvindfashion.png'

const font = 'Lato';
const grey = '#808080';

const styleItem = {display: 'flex', 'paddingTop': '2vh'}
const textStyle = {fontFamily: font, color: grey}


export default function Expertise() {

    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg2} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Fund Raising
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Fund Raising
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '8vh', 'paddingLeft': '12vw', 'paddingRight': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We advise companies, across sectors, in raising capital across their growth cycle.</span>
                            <br/> <br/> 
                            
                            We have deep sectoral expertise in fashion, retail & consumer sector and have emerged as the go-to investment bank for companies seeking capital in the sector.
                            <br/><br/>
                            Our network with global and domestic investors and deep insights into business and capital markets allows us to find the right capital and right partner for our clients. We work with our client across the transaction, right from evaluating the capital needs, to identifying the target investors, creating deal collaterals, negotiations, due diligence and documentation. 
                            <br/><br/>
                            We have deep relationships with leading global and domestic private equity funds. We work closely with them on some of their portfolio companies and also help them evaluate investment opportunities. Our understanding of businesses and the capital markets, deal drivers and valuations, allow us to add value as both, advisors to the investor as well as the investee. 
                            <br/> <br/> 
                            
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={styleItem}>
                    <Grid container direction="column">
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={arvind} alt="Arvind" style={{width:'75%', height: 'auto'}}/>
                                    <img src={multiples} alt="Multiples" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"style={textStyle}>
                                    Private Equity Investment in Arvind Fashions by Multiples 
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={fgroup} alt="Future Group" style={{width:'75%', height: 'auto'}}/>
                                    <img src={amazon} alt="Amazon" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"style={textStyle}>
                                    Investment in Future Coupons by Amazon
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={nse} alt="NSE" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"style={textStyle}>
                                    Block Deal 
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={arvindfashion} alt="Arvind Fashion" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"style={textStyle}>
                                    Advisor to Rights issue
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}