<script lang="ts">

    export default{

        data() {
            return{
                headerTag: null as HTMLElement | null,
                translate: 0 as number,
                width: 100 as number,
                borderRadius: 0 as number,
            }
        },
        methods: {
            setHeaderTag(){
                /**
                 * Almacenamos la etiqueta del header
                 */
                const headerTag : HTMLElement | null = this.$refs['header'] as HTMLElement | null;
                if(headerTag){
                    this.headerTag = headerTag;
                }
            },

            scrollHeader(){

                const pixelScroll : number = window.scrollY;
                
                // Definimos el movimiento del header dependiendo la cantidad del scroll del usuario, llegando a un limite del 30px

                if(!this.headerTag) return;
                
                // El limite del scroll es de 32px
                if(pixelScroll <= 400){
                    console.log(pixelScroll)
                    this.translate = pixelScroll / 13;
                    this.width = 100 - (pixelScroll / 15);
                    this.borderRadius = pixelScroll / 12;
                }

                this.headerTag.style.transform = `translateY(${this.translate}px)`;
                this.headerTag.style.width = `${this.width}%`;
                this.headerTag.style.borderRadius = `${this.borderRadius}px`


            },

        },
        mounted() {
            this.setHeaderTag();

            this.scrollHeader();

            window.onscroll = () => {
                this.scrollHeader();
            }
        }

    }

</script>

<template>
    <header>
        <section ref="header" class="container-header">
            <section class="column">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/join-us">Join us</NuxtLink>
                    </li>
                </ul>
            </section>
            <section class="logo">
                <NuxtLink to="/">
                    <img src="/assets/img/codigtivo_icon.svg" alt="Icon Codigtivo" width="50" height="50"/>
                </NuxtLink>
                <label for="">Open</label>
            </section>
            <section class="column">
                <ul>
                    <li>
                        <NuxtLink to="/support">Support</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/data">Data</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/buy">Buy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us">About us</NuxtLink>
                    </li>
                </ul>
            </section>
        </section>
    </header>
</template>