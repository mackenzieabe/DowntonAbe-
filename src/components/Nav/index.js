import React from 'react';


function Nav() {


    return (
        <div class="navbar-div">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" aria-label="myname">Mackenzie Giesler-Abe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" data-testid="about" href="/"> About </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-testid="contact" href="/contact"> Contact </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-testid="portfolio" href="/portfolio"> Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-testid="resume" href="/resume"> Resume</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Nav;