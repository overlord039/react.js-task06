import {Component} from 'react';
import './portfolio.css';

class portfolio extends Component{
    render(){
        const imageUrl = process.env.PUBLIC_URL + '/myimage.jpg';
        return(
            <div class="container">
                <center><h1 class="bg-black text-light m-1 mb-0">My Portfolio</h1></center>
                <div class="row mt-0">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="Me" class="img-fluid rounded border border-info p-2 w-80 mt-5 slide-in "/>
                    </div>
                    <div class="col-md-8">
                        <div class="jumbotron jumbotron-fluid mt-5 bg-white border rounded">
                            <div class="container1 border border-white rounded">
                                <h3 class="p-2">About Me</h3>
                                <p class="p-2 one">
                                I am g.durga sankar rao. Computer Science Student at VIT-AP uinversity. </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-white border rounded">
                            <div class="container1 border border-white rounded">
                                <h3 class="p-2">Skills</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Programming: Python, Java</li>
                                        <li>Web-Development: HTML, CSS, JavaScript, React, Node, Express</li>
                                        <li>Database: MySQL, MongoDB</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-white border rounded">
                            <div class="container1 border border-white rounded">
                                <h3 class="p-2">Hobbies</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Playing video games</li>
                                        <li>reading manhwas,mangas,light novels</li>
                                        <li>watching anime,webseries,movies</li>
                                        <li>explore new things</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-white border rounded">
                            <div class="container1 border border-white rounded">
                                <h3 class="p-2">Contact Me: <a href="mailto:gdsr1613405@gmail.com">Email Id</a> <a href="https://www.linkedin.com/in/shadow-monarch-277040287/">LinkedIn</a> +91 8639283519</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default portfolio;