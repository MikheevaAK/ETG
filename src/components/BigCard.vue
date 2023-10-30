<template>
    <div class="big-card">
        <button v-if="!link || noScroll" class="big-card__button-close" @click="closeBigCard">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M2.448 0L7.704 5.256L12.996 0L15.408 2.412L10.152 7.704L15.408 12.96L12.996 15.372L7.704 10.116L2.448 15.372L0 12.96L5.256 7.704L0 2.412L2.448 0Z"
                    fill="white" />
            </svg>
        </button>
        <button v-else @click="closeBigCardLast" class="big-card__button-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M2.448 0L7.704 5.256L12.996 0L15.408 2.412L10.152 7.704L15.408 12.96L12.996 15.372L7.704 10.116L2.448 15.372L0 12.96L5.256 7.704L0 2.412L2.448 0Z"
                    fill="white" />
            </svg>
        </button>
        <div class="big-card__left">
            <div class="big-card__left-title">{{ card.title }}</div>
            <button v-if="!link || noScroll" class="big-card__left-button" @click="closeBigCard">Got it!</button>
            <button v-else @click="closeBigCardLast" class="big-card__left-button">Got it!</button>
        </div>
        <div class="big-card__right">
            <div class="big-card__right-descr" v-html="card.descr"></div>
            <div class="big-card__right-img">
                <img :src="card.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            default: null
        },
        showBigCard: {
            type: Boolean,
            default: false
        },
        link: {
            type: Boolean,
            default: false
        },
        noScroll: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeBigCard() {
            this.$emit('update:showBigCard', false)
        },
        closeBigCardLast() {
            this.$emit('update:showBigCard', false)
            let top = document.querySelector('#prediction').offsetTop;
            window.scrollTo(0, top);
            this.$emit('update:noScroll', true)
        }
    }
}
</script>

<style lang="scss">
.big-card {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 4.62rem;
    width: 100%;
    height: 42rem;
    border-radius: 1.5rem;
    background: var(--purple, #8377F1);
    z-index: 3;
    overflow: hidden;

    &__button-close {
        position: absolute;
        top: 1.37rem;
        right: 1.29rem;
        width: 0.963rem;
        height: 0.96075rem;
        background: inherit;
        border: none;
        outline: none;
        cursor: pointer;

        svg {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    &__right {
        padding-right: 2.69rem;
        margin: 2.06rem 0.19rem 1.8rem 0;
        width: 50%;
        overflow-y: auto;
        font-size: 1.38889rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6875rem;

        ul {
            list-style: inside;
        }

        &::-webkit-scrollbar {
            width: 0.25rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #fff;
            border-radius: 0;
        }

        &-descr {
            margin-bottom: 5rem;
        }

        &-img {
            height: 16.25rem;
            object-fit: contain;

            img {
                width: unset;
                height: 100%;
            }
        }
    }

    &__left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        padding: 1.87rem 0 2.94rem 3.31rem;

        &-title {
            margin-bottom: 0.5rem;
            font-size: 2.5rem;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.1125rem;
            text-transform: uppercase;
        }

        &-descr {
            margin-bottom: auto;
            font-size: 1.75rem;
            font-weight: 400;
            line-height: 2.25rem;
        }

        &-button {
            width: 20rem;
            height: 5rem;
            padding: 1.125rem 2.25rem;
            border-radius: 2.5rem;
            background: var(--black, #000);
            text-align: center;
            color: var(--white, #FFF);
            font-size: 1.75rem;
            font-weight: 400;
            line-height: 2.25rem;
            cursor: pointer;
            border: none;
            outline: none;
        }
    }
}
</style>