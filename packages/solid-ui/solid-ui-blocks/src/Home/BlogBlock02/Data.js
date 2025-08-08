import React, {useState, useEffect}from 'react';
import {Link} from 'gatsby';
import './loading.css';

const styles = {
    imgStyle: {
        width: `100%`,
        height: 180,
        objectFit: "cover",
        borderRadius: "6px"
    },
    flex0 : {
        flex:0,
        WebkitFlex: 0
    },
    loadings: {
        width:"100%",
        textAlign: "center"
    }
}

function Data() {

    var convertDate = (d) => {
        // var parts2 = d.split("T");
        // var time = parts2[1];
        // var parts = parts2[0].split("-");
        // var months = {"01": "Jan","02": "Feb","03": "Mar","04": "Apr","05": "May","06": "June","07": "July","08": "Aug","09": "Sep","10": "Oct","11": "Nov","12": "Dec"};

        // return parts[1]+" "+months[parts[1]]+", "+ parts[0];
        var today  = new Date(d);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString("en-US", options);
    }
       

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        var posts = [];

        const getPosts = async () => {

            const presponse = await fetch('https://school.mumara.com/wp-json/wp/v2/posts/', {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            
            if(presponse.status !== 200) {
                console.log(presponse.status)
                throw new Error('cannot fetch the posts data.');
            }
            
            const pdata = await presponse.json();
            
            return pdata;

        }
		getPosts()
            .then(pdata => {
                setData(pdata);
                setLoading(false);
                posts.push(pdata);
            })
            .catch(err => console.log('Rejected: ', err.message))
            setTimeout(() => {
                setLoading(false); 
            }, 2500);
	} , []);
    
    return (
        <div className="css-fdsoy5">
            <div style={{display: 'none'}}><div id="loading" className="loading"><div className="loader"></div></div></div>

            {/* {data !== undefined && data !== [] ? JSON.stringify(data[0]) : "12121212"} */}
            {loading == true ? <div style={styles.loadings}><div id="loading" className="loading"><div className="loader"></div></div></div> : ""}
            
            {data !== undefined && data != [] ? 
            data?.slice(0,3).map((posts, index) => {
                return(
                    <div className="css-1w4obji" key={`post-`+index} id={posts.id}>
                        <Link to={posts.link} title={posts.title.rendered} className="button-group-button css-1ip3i53" target="_blank">
                            <article className="css-1lr6sgx">
                                <div className="css-1li49bo" style={styles.flex0}>
                                    <div className="css-1i5g8ff">
                                        <div className="css-1jhnp88-ContentImages">
                                            <picture>
                                            <img src={posts.yoast_head_json.og_image[0].url} alt="" style={styles.imgStyle} />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1eetir6" style={{padding:`1rem 2rem`}}>
                                    <h5 className="css-19bvfwj" style={{textAlign: 'left'}}>{posts.title.rendered.slice(0, 62)}</h5>
                                    <div className="css-1r912eh" style={{textAlign: 'left', marginBottom:0}}>{String(posts.excerpt.rendered).replace(/<[^>]+>/gm, '').replace(/\&([^;]+);/g, "").slice(0, 125)+'... '}</div>
                                </div>                                
                            </article>
                        </Link>
                    </div>
                )
            })
            : ""}
        </div>
    );
}

export default Data;