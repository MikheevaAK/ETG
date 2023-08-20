<template>
    <div class="wrap">
        <Transition name="wrap-card">
            <div class="wrap-cards">
                <div v-for="(card, index) in ramdonCards" :key="index" @click="getClick(card)">
                    <MiniCard :img="card.imgCard" :open="card.open" />
                </div>
            </div>
        </Transition>
        <Transition name="bounce">
            <BigCard v-if="showBigCard" :card="infoForBigCard" @update:showBigCard="showBigCard = $event"
                @update:noScroll="noScroll = $event" :link="allPara" :noScroll="noScroll" />
        </Transition>
        <div class="main-text">
            <p v-if="!allPara">
                Find all 12 pairs and discover what's hidden below on this page.
            </p>
        </div>
    </div>
</template>

<script>
import MiniCard from '@/components/MiniCard.vue';
import ramdonCards from '@/mixins/random'
import BigCard from '@/components/BigCard.vue';

export default {
    name: 'BlockCards',
    components: {
        MiniCard,
        BigCard
    },
    data() {
        return {
            ramdonCards,
            previousCard: null,
            showBigCard: false,
            infoForBigCard: null,
            countPara: 0,
            allPara: false,
            noScroll: false
        };
    },
    methods: {
        getClick(itemArray) {
            let choosenCard = this.ramdonCards.find(card => card.id === itemArray.id)

            if (choosenCard.open == false && choosenCard.para == false) {
                if (this.previousCard !== null) {
                    if (choosenCard.number === this.previousCard.number) {
                        choosenCard.para = true
                        this.previousCard.para = true

                        this.infoForBigCard = this.previousCard
                        setTimeout(() => {
                            this.showBigCard = true
                        }, 800);
                    } else {
                        const chosenId = choosenCard.id
                        const secondId = this.previousCard.id
                        setTimeout(() => {
                            let choosenCards1 = this.ramdonCards.find(card => card.id === chosenId)
                            let choosenCards2 = this.ramdonCards.find(card => card.id === secondId)
                            choosenCards1.open = false
                            choosenCards2.open = false

                        }, 700);
                    }
                    this.previousCard = null
                } else {
                    for (let i = 0; i < this.ramdonCards.length; i++) {
                        if (this.ramdonCards[i].para === false) {
                            this.ramdonCards[i].open = false
                        }
                    }

                    this.previousCard = choosenCard
                }
                choosenCard.open = !choosenCard.open
            } else {
                if (choosenCard.para == true) {
                    this.infoForBigCard = choosenCard
                    this.showBigCard = true
                }
            }

            let allPara = this.ramdonCards.find(card => card.para === false)
            if (!allPara) {
                this.allPara = true
                this.$emit('update:allPara', true)
            }
        },
    },
}
</script>

<style lang="scss">
.wrap-card-enter-active {
    animation: wrap-card-leave .95s;
}

.wrap-card-leave-active {
    animation: wrap-card-in .3s ease;
}

@keyframes wrap-card-in {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes wrap-card-leave {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.bounce-enter-active {
    animation: bounce-in .95s;
}

.bounce-leave-active {
    animation: bounce-leave 0.3s ease;
}

@keyframes bounce-in {
    0% {
        transform: translateY(100%);
    }

    75% {
        transform: translateY(-5%);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes bounce-leave {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(0);
    }
}

.wrap {
    position: relative;
    width: 82.2223rem;
    min-height: 42rem;
    margin: 0 8rem 7.19rem 8rem;

    .main-text {
        margin-top: 2rem;
        height: 1.6875rem;

        p {
            text-align: center;
            font-size: 1.25rem;
            line-height: 1.6875rem;
        }
    }
}

.wrap-cards {
    display: flex;
    flex-wrap: wrap;
    // gap: 2rem;
    gap: 2.2223rem;
}
</style>