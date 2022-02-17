<template>
    <div class="nissan-footer">
        <div class="noindex">
            <footer itemscope="" itemtype="http://schema.org/WPFooter" class="grid-row bleed">
                    <nav class="c_054-3 rebrand-enabled">
                        <div class="grid-row">
                            <div class="col-12">
                               
                                <div v-for="(item, itemIndex) in mainNavigation" :key="itemIndex" class="footer-container col-3">
                                    <h2 :class="['footer-heading', {'is-open': isVisible(itemIndex)}]" v-if="item.active === 1" @click.prevent="toggle(itemIndex)">
                                        <a class="accordionToggle"><span></span></a> 
                                        <span>{{ item.title }}</span>
                                    </h2>
                                    <ul>

                                        <li :class="[{'is-visible': isVisible(itemIndex)}, {'subheader': child.meta.subheader}]" v-for="(child, childIndex) in item.children" :key="childIndex">
                                                <a  v-if="child.active === 1" :title="child.title" :href="child.url" :target="child.target"><span>{{ child.title }}</span></a>
                                        </li>

                                    </ul>
                                </div>

                                <div class="footer-container col-3 last">
                                    
                                    <h2 class="footer-heading">
                                        <a class="accordionToggle">
                                            <span></span>
                                        </a>
                                        <span>{{ socialNavigation.title }}</span>
                                    </h2>
                                    <ul>
                                        
                                        <li v-for="(social, socialIndex) in socialNavigation.schema" :key="socialIndex"><a :target="social.target" :class="['social-icon', social.icon]" :href="social.url" rel="">
                                            <span>{{social.title}}</span>
                                            </a>
                                        </li>

                                    </ul>
                                    
                                </div>

                            </div>
                        </div>
                    </nav>
            </footer>
        </div>


        <div class="noindex">
            <footer class="grid-row bleed">
                <nav class="c_025 ">
                    
                    <div class="grid-row">
                        <div class="col-12">

                            <ul class="footer-options">
                
                                <li v-for="(option, optionsIndex) in optionsNavigation.schema" :key="optionsIndex"><a v-if="option.active === 1" :href="option.url" title="">{{option.title}}</a></li>
                
                            </ul>

                            <div class="footer-legal">
                                
                                <ul>
                                    
                                    <li v-for="(legal, legalIndex) in legalNavigation.schema" :key="legalIndex"><a v-if="legal.active === 1" :href="legal.url" title="">{{legal.title}}</a></li>
                                        
                                </ul>

                                <p class="footer-copyright">{{ footerTrademark }}</p>
                            </div>
                        </div>
                    </div>
                
                </nav>
            </footer>
        </div>
    </div>
    
</template>

<script>
    import axios from "axios";

    export default {
        name: "Footer",

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
        },

        data() {
            return {
                visibleIndex: null,
                basicInformation: [],
                mainNavigation: [],
                socialNavigation: [],
                optionsNavigation: [],
                legalNavigation: []
            }
        },

        computed: {
            footerTrademark() {
                return this.basicInformation && this.basicInformation.meta && this.basicInformation.meta.footer_trademark
            }
        },

        methods: {
            fetchNavigation(apiUri) {
                axios.get(apiUri)
                    .then((response) => {
                        this.basicInformation = response.data;
                        this.mainNavigation = response.data.footer.schema;
                        this.socialNavigation = response.data.social;
                        this.optionsNavigation = response.data.footer_options;
                        this.legalNavigation = response.data.footer_legal;
                    })
            },

            isVisible(itemIndex) {
                return this.visibleIndex === itemIndex;
            },

            toggle(itemIndex) {
                if (this.visibleIndex === itemIndex) {
                    this.visibleIndex = null;
                } else {
                    this.visibleIndex = Number(itemIndex);
                }
            },

            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
</script>

<style scoped src="./assets/css/base.css"></style>
