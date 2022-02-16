<template>
<div>

    <div :class="['header', {'js-c_010D-meganav-open' : meganavActive}, {'js-c_010D-menu-open' : sidebarActive}]">
        
        <div itemscope="itemscope" itemtype="http://schema.org/WPHeader">
            <div class="noindex">
                
                <header class="c_010D c_010D-theme-dark c_010D-logo-small live-chat-available" role="navigation" data-initiated="true" style="margin-bottom: 50.6667px;" data-height-set-by-c_046c="">
                    <div class="c_010D-breakpoint-test"></div>
                    <div class="c_010D-overlay"></div>

                    <div class="wrapper">
                        
                        <a v-if="basicInformation" :href="basicInformation.site_url" class="logo-container" role="logo" aria-label="logo"> <picture class="logo svg js-c_010D-svg-inline">
                            <source srcset="//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/21.09.2.NISSAN-18/common-assets/img/svg/nissan-next-logo.svg" media="screen and (min-width: 960px)">
                            <source srcset="//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/21.09.2.NISSAN-18/common-assets/img/svg/nissan-next-logo.svg" media="print">
                            <img src="//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/21.09.2.NISSAN-18/common-assets/img/svg/nissan-next-logo-text.svg" alt=""><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504 421.7" style="enable-background:new 0 0 504 421.7;" xml:space="preserve" class="desktop">
                            
                            <g id="Layer_1_1_">
                                <g id="Nissan_Badge_1_">
                                    <g>
                                        <path class="st0" d="M293.7,227.7c-0.4,0.1-2,0.1-2.7,0.1h-51.6v12h52.5c0.4,0,3.5,0,4.1-0.1c10.7-1,15.6-9.9,15.6-17.7
                                            c0-8-5.1-16.6-14.8-17.5c-1.9-0.2-3.5-0.2-4.2-0.2h-34.3c-1.5,0-3.2-0.1-3.8-0.3c-2.7-0.7-3.7-3.1-3.7-5.1c0-1.8,1-4.2,3.8-5
                                            c0.8-0.2,1.7-0.3,3.6-0.3h49.5v-11.8h-50.3c-2.1,0-3.7,0.1-5,0.3c-8.6,1.2-14.6,8.1-14.6,16.9c0,7.2,4.5,15.6,14.4,17
                                            c1.8,0.2,4.3,0.2,5.4,0.2H291c0.6,0,2.1,0,2.4,0.1c3.8,0.5,5.1,3.3,5.1,5.8C298.5,224.5,297,227.1,293.7,227.7z"></path>
                                        <path class="st0" d="M195.9,227.7c-0.4,0.1-2,0.1-2.6,0.1h-51.7v12h52.5c0.4,0,3.5,0,4.1-0.1c10.7-1,15.6-9.9,15.6-17.7
                                            c0-8-5.1-16.6-14.8-17.5c-1.9-0.2-3.5-0.2-4.2-0.2h-34.3c-1.5,0-3.2-0.1-3.8-0.3c-2.7-0.7-3.7-3.1-3.7-5.1c0-1.8,1-4.2,3.8-5
                                            c0.8-0.2,1.7-0.3,3.6-0.3h49.5v-11.8h-50.3c-2.1,0-3.7,0.1-5,0.3c-8.6,1.2-14.6,8.1-14.6,16.9c0,7.2,4.5,15.6,14.4,17
                                            c1.8,0.2,4.3,0.2,5.4,0.2h33.4c0.6,0,2.1,0,2.4,0.1c3.8,0.5,5.1,3.3,5.1,5.8C200.7,224.5,199.3,227.1,195.9,227.7z"></path>
                                        <rect x="101.7" y="181.4" class="st0" width="13" height="58.7"></rect>
                                        <polygon class="st0" points="73,240.1 73,181.4 60,181.4 60,225.2 16.7,181.4 0,181.4 0,240.1 13,240.1 13,196.1 56.6,240.1
                                            "></polygon>
                                        <polygon class="st0" points="491.1,181.4 491.1,225.2 447.8,181.4 431.1,181.4 431.1,240.1 444.1,240.1 444.1,196.1 487.6,240.1
                                            504,240.1 504,181.4 			"></polygon>
                                        <path class="st0" d="M363.4,181.4l-36.6,58.7h15.8l6.5-10.5h42.7l6.5,10.5H414l-36.6-58.7H363.4z M385.1,218.5h-29.3l14.7-23.6
                                            L385.1,218.5z"></path>
                                        <path class="st0" d="M72.3,148.1C98.5,71.6,170.7,20.2,252.1,20.2s153.7,51.4,179.8,127.9l0.2,0.6h57.3v-6.9l-23.8-2.8
                                            c-14.7-1.7-17.8-8.2-21.8-16.4l-1-2C408.4,47.4,333.5,0,252.1,0C170.6,0,95.8,47.4,61.4,120.8l-1,2c-4,8.2-7.1,14.7-21.8,16.4
                                            L14.8,142v6.9H72L72.3,148.1z"></path>
                                        <path class="st0" d="M432.1,272.9l-0.2,0.6c-26.2,76.5-98.4,127.8-179.8,127.8l0,0c-81.4,0-153.7-51.4-179.8-127.9l-0.2-0.6H14.9
                                            v6.9l23.8,2.8c14.7,1.7,17.8,8.2,21.8,16.4l1,2c34.4,73.4,109.3,120.8,190.7,120.8l0,0c81.4,0,156.3-47.4,190.7-120.7l1-2
                                            c4-8.2,7.1-14.7,21.8-16.4l23.8-2.8v-6.9L432.1,272.9z"></path>
                                    </g>
                                    <g id="Layer_2_2_">
                                        <g id="Layer_3_1_">
                                        </g>
                                    </g>
                                </g>
                            </g>
                            </svg>
                            <svg viewBox="0 0 120 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mobile">
                                <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                               
                                <title>{{ basicInformation.site_title }}</title>
                                <g id="Page-1" stroke="none">
                                    <g id="Nissan-logo-Copy">
                                        <path d="M70.6433598,12.1442163 C70.5516961,12.1609845 70.1541862,12.1748159 69.9980152,12.1748159 L57.4055395,12.1748159 L57.4055395,15.2353389 L70.1924396,15.2353389 C70.2982678,15.2353389 71.0341032,15.2290864 71.2027246,15.2144024 C73.8117106,14.9697008 75,12.6900819 75,10.6749644 C75,8.63085786 73.7631721,6.43413252 71.3988632,6.19104139 C70.9350415,6.14462102 70.5561169,6.14196843 70.3710754,6.14518943 L70.3426561,6.41186969 L70.3426561,6.14518943 L62.0182245,6.14518943 C61.6398412,6.14518943 61.2485565,6.11241097 61.0887766,6.06826426 C60.4242151,5.88011968 60.1874774,5.27599179 60.1874774,4.77323082 C60.1874774,4.31139556 60.4295381,3.69646783 61.1135872,3.48255521 C61.3158607,3.41860879 61.527878,3.41614567 61.9875496,3.41614567 L74.0527788,3.41614567 L74.0527788,0.38385377 L61.7924035,0.38385377 C61.2728257,0.38385377 60.8947131,0.404790302 60.5668531,0.451115931 C58.4666185,0.752185153 57,2.53179036 57,4.77948336 C57,6.61791927 58.1003248,8.76415062 60.5173223,9.13200832 C60.9488452,9.19699683 61.5714543,9.19216533 61.8337243,9.19216533 L69.9781667,9.19159691 C70.1320823,9.19159691 70.4941357,9.20135466 70.5690184,9.2121545 C71.4824973,9.34497359 71.8080115,10.0661945 71.8080115,10.696943 C71.8080115,11.309976 71.4474017,11.9953869 70.6433598,12.1442163 Z" id="Path"></path>
                                        <path d="M46.6416561,12.1442163 C46.5508122,12.1609845 46.1530655,12.1748159 45.9964567,12.1748159 L33.4054148,12.1748159 L33.4054148,15.2353389 L46.1923079,15.2353389 C46.2978565,15.2353389 47.0349824,15.2290864 47.2019656,15.2144024 C49.8112705,14.9697008 51,12.6897977 51,10.6749644 C51,8.63085786 49.7627362,6.43413252 47.3976364,6.19104139 C46.933764,6.14462102 46.5544207,6.14196843 46.3703873,6.14518943 L46.3419703,6.41186969 L46.3419703,6.14518943 L38.0177969,6.14518943 C37.6394459,6.14518943 37.2483749,6.11241097 37.0888793,6.06826426 C36.4248255,5.88011968 36.1881982,5.27599179 36.1881982,4.77323082 C36.1881982,4.31139556 36.4297871,3.69646783 37.1116128,3.48255521 C37.315493,3.41860879 37.527402,3.41614567 37.9875757,3.41614567 L50.0507846,3.41614567 L50.0507846,0.38385377 L37.7929875,0.38385377 C37.2729127,0.38385377 36.8948323,0.404790302 36.5675416,0.451115931 C34.4669447,0.751711476 33,2.53179036 33,4.77948336 C33,6.61791927 34.100231,8.76415062 36.5170226,9.13200832 C36.9485087,9.19699683 37.5674564,9.19131271 37.8337635,9.19216533 L45.9765197,9.19159691 C46.1308732,9.19159691 46.4935273,9.20135466 46.5683134,9.2121545 C47.4811732,9.34497359 47.8066597,10.0661945 47.8066597,10.696943 C47.8066597,11.309976 47.4460805,11.9959554 46.6416561,12.1442163 Z" id="Path"></path>
                                        <polygon id="Path" points="28 0.38385377 24 0.38385377 24 15.2353389 28 15.2353389"></polygon>
                                        <polygon id="Path" points="18 15.2353389 18 0.38385377 14.7964739 0.38385377 14.7964739 11.4517115 4.12399744 0.38385377 0 0.38385377 0 15.2353389 3.20432995 15.2353389 3.20432995 4.09297639 13.9534119 15.2353389"></polygon>
                                        <polygon id="Path" points="116.798112 0.38385377 116.798112 11.4519926 106.12363 0.38385377 102 0.38385377 102 15.2353389 105.203715 15.2353389 105.203715 4.09269524 115.953106 15.2353389 120 15.2353389 120 0.38385377"></polygon>
                                        <path d="M92.0303287,9.7754284 L84.9713644,9.7754284 L88.5040547,3.80797664 L92.0303287,9.7754284 Z M86.8189823,0.38385377 L78,15.2353389 L81.7913907,15.2353389 L83.3595444,12.583211 L93.6441984,12.583211 L95.2135107,15.2353389 L99,15.2353389 L90.1856517,0.38385377 L86.8189823,0.38385377 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg></picture>
                        </a>

                        <div class="burger-menu-wrapper">
                            
                            <div v-if="livechatUrl" class="live-chat-container">
                                
                                <div class="live-chat-tooltip">Live chat</div>

                                    <a :href="livechatUrl" target="_blank" class="c_095A-live-chat">Live chat</a>

                                </div>
                                <div class="burger-container">

                                    <a @click="toggleMenu" class="burger" role="button"><span>Open/Close menu</span></a>

                                </div>
                            </div>

                            <aside class="sidebar-mobile">
                                <div class="sidebar-mobile-inner">
                                <div class="menu">
							
                                    <ul class="primary">

                                        <li :class="[{'has-meganav' : mainIndex === 0}, {'has-menu' : mainIndex !== 0}, {'js-c_010D-dropdown-off-screen' : mainIndex === 3}, {'js-c_010D-accordion-open' : mainIndex === mobileNonVehicleActive}]" v-for="(main, mainIndex) in mainNavigation" :key="mainIndex" @click="toggleVehicle(mainIndex); mobileNonVehicleDropdown(mainIndex);"><a v-if="main.active === 1">{{main.title}}</a>

                                            <ul v-if="mainIndex !== 0 && main.active === 1" class="dropdown">

                                                <li v-for="(dropdown, dropdownIndex) in main.children" :key="dropdownIndex"><a :href="dropdown.url" v-if="dropdown.active === 1">{{dropdown.title}}</a></li>
                                                        
                                            </ul>

                                        </li>

                                    </ul>

                                </div>
                                <div class="toolbar">
                                
                                </div>
						

                                <aside class="sidebar-desktop" role="sidebar" aria-label="sidebar navigation" style="top: 0px; bottom: 0px;">
                                    <div class="sidebar-desktop-inner">
                                        <div class="c_010D-user-menu"></div>
		
                                        <ul class="sidebar" style="margin-bottom: 40px;">
                                            
                                            <li v-for="(sidebar, sidebarIndex) in sideNavigation" :key="sidebarIndex" :class="[{'margin-bottom-sidebar' : sidebar.meta.marginBottom}]"><a :href="sidebar.url" :target="sidebar.target" v-if="sidebar.active === 1">{{sidebar.title}}</a></li>
                                            
                                        </ul>

                                    </div>
                                </aside>
                            </div>
                        </aside>
                    </div>
    
                    <div class="meganav-container">
                        <div class="c_010D-meganav">
						
                            <ul class="categories" v-if="mainNavigation && mainNavigation[0] && mainNavigation[0].children">
	
                                <li v-for="(vehicleType, vehicleTypeIndex) in mainNavigation[0].children" :key="vehicleTypeIndex" @click="toggleVehicleType(vehicleTypeIndex)"><a :class="[{'active' : vehicleTypeIndex === vehicleTypeActive}]" :href="vehicleType.url" v-if="vehicleType.active === 1">{{vehicleType.title}}</a></li>
	
                            </ul>

                            <div class="categories-wrapper" v-if="mainNavigation && mainNavigation[0] && mainNavigation[0].children && mainNavigation[0].children[0].children">
	
                                <div :class="['vehicles-container', {'active' : vehicleTypeActive === 0}]" data-tabname="category-0">
						
                                    <div class="vehicle-block-wrapper">
								
										<a v-for="(vehicleAll, vehicleAllIndex) in mainNavigation[0].children[0].children" :key="vehicleAllIndex" class="vehicle-block" :href="vehicleAll.url" :target="vehicleAll.target">
											
												<picture v-if="vehicleAll.active === 1"> 
													
														<img :src="vehicleAll.icon" :alt="vehicleAll.title">
													
                                                </picture>
											
											<div class="model-details" v-if="vehicleAll.active === 1">

												<label>{{vehicleAll.title}}</label>

											</div>
										</a>

                                    </div>

                                <div class="more-vehicles">
                                    <a v-if="basicInformation.meta.all_vehicles" class="chevron-right" :href="basicInformation.meta.all_vehicles_url">{{basicInformation.meta.all_vehicles}}</a>
                                </div>
                            
                            </div>
					
                            <div :class="['vehicles-container', {'active' : vehicleTypeActive === 1}]" data-tabname="category-1">
                                
                                    <div class="vehicle-block-wrapper">
                                        
                                        <a v-for="(vehicleAll, vehicleAllIndex) in mainNavigation[0].children[1].children" :key="vehicleAllIndex" class="vehicle-block" :href="vehicleAll.url" :target="vehicleAll.target">
											
												<picture> 
													
														<img :src="vehicleAll.icon" :alt="vehicleAll.title">
													
                                                </picture>
											
											<div class="model-details">

												<label>{{vehicleAll.title}}</label>

											</div>
										</a>
                                            
                                    </div> 

                                <div class="more-vehicles">
                                    <a v-if="basicInformation.meta.all_electric_vehicles" class="chevron-right" :href="basicInformation.meta.all_electric_vehicles_url">{{basicInformation.meta.all_electric_vehicles}}</a>
                                </div>
                            
                            </div>
				
                        </div>

					</div>
	
				</div>
			
            </header>
		
        </div>
    </div>
    <div class="title liveChatScript" v-if="livechatUrl">

        <div class="c_095A c_095A-modernised" data-script-url="https://c.la1-c1-lon.salesforceliveagent.com/content/g/js/37.0/deployment.js" data-live-chat-init-url="https://d.la1-c1-lon.salesforceliveagent.com/chat" data-live-chat-init-param1="572b0000000TYXI" data-live-chat-init-param2="00Db0000000cZvn" data-live-chat-button-id="573b0000000TYYY" data-live-chat-tooltip="Live chat" data-live-chat-custom-detail="{&quot;Brand&quot;:&quot;Nissan&quot;,&quot;caseSubType&quot;:&quot;Nissan Site&quot;}">
				<script data-component="c_095A" type="text/x-handlebars-template">
                    <button type="button" class="c_095A-live-chat" aria-label="Live Chat">Live chat</button>
                </script>
        </div>

    </div>

</div>
</div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Header',

        props: {
            url: {
                type: String
            }
        },

        created() {
            if ("HEADER_FOOTER_SETTINGS" in window) {
                this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri);
            } else {
                if (this.url) {
                    this.fetchNavigation(this.url);
                }
            }

            window.addEventListener('click', this.del);


        },
        beforeDestroy() {
            window.removeEventListener('click', this.del)
        },
        
        data() {
            return {
                meganavActive: false,
                sidebarActive: false,
                mobileNonVehicleActive: 0,
                vehicleTypeActive: 0,
                basicInformation: [],
                mainNavigation: [],
                sideNavigation: []
            }
        },

        computed: {
            livechatUrl() {
                return this.basicInformation && this.basicInformation.meta && this.basicInformation.meta.livechat_url;
            }
        },

        methods: {
            fetchNavigation(apiUri) {
                axios.get(apiUri)
                    .then((response) => {
                        this.basicInformation = response.data;
                        this.mainNavigation = response.data.header.schema;
                        this.sideNavigation = response.data.header_sidebar.schema;
                    })
            },
            toggleVehicle(index){
                if(index === 0){
                    this.meganavActive = true;
                    document.body.classList.add("hideOverflow");
                    return true;
                }
            },
            toggleMenu(){
                if(this.meganavActive && this.sidebarActive) {
                    this.meganavActive = false;
                } else if(this.meganavActive && !this.sidebarActive){
                    this.meganavActive = false;
                    document.body.classList.remove("hideOverflow");
                } else if(!this.sidebarActive){
                    this.sidebarActive = true;
                    document.body.classList.add("hideOverflow");
                } else {
                    this.sidebarActive = false;
                    document.body.classList.remove("hideOverflow");
                }
            },
            mobileNonVehicleDropdown(index) {
                if(this.mobileNonVehicleActive === index){
                    this.mobileNonVehicleActive = 0;
                } else {
                    this.mobileNonVehicleActive = index;
                }
            },
            toggleVehicleType(index) {
                this.vehicleTypeActive = index;
            },
            del(e) {
                if(! this.$el.contains(e.target)){
                    this.mobileDropdown = false
                }
            }
        }
    }
</script>

<style scoped>
    @import url("//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/small.min.css");
    @import url("//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/medium.min.css") screen and (min-width: 36.3125em);
    @import url("//libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/large.min.css") screen and (min-width: 60em);
    .wrapper .logo-container .logo svg.desktop, 
    .wrapper .logo-container .logo svg.mobile {
        filter: invert(0);
    }
    .c_010D .primary .has-menu:last-of-type .dropdown {
        right: 0;
    }
    @media screen and (min-width: 960px){
        .margin-bottom-sidebar{
            margin-bottom: 18px;
        }
    }
    
</style>
<style>.hideOverflow{overflow-y:hidden}</style>
