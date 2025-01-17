import React from 'react'

function OffCanvasMenu() {
    return (
        <>
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
                <div class="offcanvas__close">+</div>
                <ul class="offcanvas__widget">
                    <li><span class="icon_search search-switch"></span></li>
                    <li><a href="#"><span class="icon_heart_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                    <li><a href="#"><span class="icon_bag_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                </ul>
                <div class="offcanvas__logo">
                    <a href="./index.html">
                        <img src="./webAssets/img/logo.png" alt="" />
                        {/* <Avatar uri="./webAssets/img/logo.png" /> */}
                    </a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div class="offcanvas__auth">
                    <a href="#">Register</a>
                </div>
            </div>
        </>
    )
}

export default OffCanvasMenu