import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import Link from 'next/link';
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return(
        <Grid
            container
            direction="column"
            alignItems="center"
            className="footer-container-wrapper"
        >
            {/* <div className="max-width--">
        
            </div> */}
            <Grid item container className="footer-container max-width--">
                <div className="container--logo"></div>
                <div className="social-icon-wrap" style={{width:'10rem'}}>
                    <span className="social-icon-container">
                        <a href="https://www.instagram.com/datatangente/" target="_blank">
                            <Icon icon={faInstagram}/>
                        </a>
                    </span>
                    <span className="social-icon-container">
                        <a href="https://www.linkedin.com/company/data-tangente" target="_blank">
                            <Icon icon={faLinkedin} />
                        </a>
                    </span>
                </div>

                <div className="footer-number">
                    <span className="phone-icon-container"><Icon icon={faPhoneAlt} /></span>
                    <Typography variant="h6" style={{letterSpacing:5, color:'#fff'}}>
                        829-876-1754
                    </Typography>
                </div>
                
                <div className="footer-address">
                    <span className="address-icon-container"><Icon icon={faMapMarkerAlt} /></span>
                    <Typography variant="subtitle1" style={{color:'#fff'}}>
                        <span>
                            C/ mercedes echenique #9 Edificio Rivera del sur, 
                            Santo Domingo Mirador sur
                        </span>
                    </Typography>
                </div>

                <div className="menu-footer">
                    <ul>
                        <Typography variant="h6" className="menu--item footer"><Link href="/contact">Contacto</Link></Typography>
                        <Typography variant="h6" className="menu--item footer"><Link href="/solutions">Soluciones</Link></Typography>
                        <Typography variant="h6" className="menu--item footer"><Link href="/posts">Publicaciones</Link></Typography>
                    </ul>
                </div>
                {/* <div className="footer-subscribe">
                    <Typography variant="h6" style={{letterSpacing:5, display:'inline-block', paddingRight:'1.5rem', color:'#fff'}}><Link href="/">BOLET??N</Link></Typography>
                    <div className="button-subscribe footer" style={{display:'inline-block'}}>
                        <span>Suscribirme</span>
                    </div>
                </div> */}
            </Grid>
            <Grid container justifyContent="space-between" className="conditions-container max-width--">
                <Typography variant="overline" style={{color:'#fff'}}>?? COPYRIGHT 2022 DATATANGENTE</Typography>
                <div>
                    <Typography variant="body2" className="menu--item footer" style={{marginRight:'1rem', display:'inline-block'}}><Link href="#">Condiciones de uso</Link></Typography>
                    <Typography variant="body2" className="menu--item footer" style={{display:'inline-block'}}><Link href="#">Privacidad</Link></Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default Footer;