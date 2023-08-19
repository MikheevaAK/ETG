<template>
    <div class="wrap">
        <Transition name="wrap-card">
            <div v-if="!showBigCard" class="wrap-cards">
                <div v-for="(card, index) in ramdonCards" :key="index" @click="getClick(card)">
                    <MiniCard :img="card.imgCard" :open="card.open" />
                </div>
            </div>
        </Transition>
        <Transition name="bounce">
            <BigCard v-if="showBigCard" :card="infoForBigCard" @update:showBigCard="showBigCard = $event" :link="allPara" />
        </Transition>
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
            cardFirst: null,
            cardSecond: null,
            card1: null,
            showBigCard: false,
            infoForBigCard: null,
            countPara: 0,
            allPara: false
        };
    },
    methods: {
        repeatClick(card) {
            if (card.open) {
                this.showBigCard = true
                this.infoForBigCard = card
            }
        },
        getClick(itemArray) {
            if (this.cardFirst === null) {
                this.cardFirst = itemArray;
            } else {
                this.cardSecond = itemArray;
            }

            if (itemArray.click === false && itemArray.para === false) {
                itemArray.click = true;
                itemArray.open = true;
                if (this.cardFirst !== null && this.cardSecond !== null
                    && this.cardFirst.click === true && this.cardSecond.click === true) {
                    if (this.cardFirst.number === this.cardSecond.number) {
                        this.cardFirst.para = true;
                        this.cardSecond.para = true;
                        this.cardFirst.click = false;
                        this.cardSecond.click = false;
                        this.infoForBigCard = this.cardSecond
                        setTimeout(() => {
                            this.showBigCard = true
                        }, 1000);
                    }
                    if (this.cardFirst.number !== this.cardSecond.number) {
                        this.card1 = this.cardFirst.id;
                        this.cardFirst.click = false;
                        this.cardSecond.click = false;
                        setTimeout(() => {
                            const cardBefore = ramdonCards.find(card => card.id === this.card1);

                            cardBefore.open = false;
                            itemArray.open = false;
                        }, 1000);
                    }
                    this.cardFirst = null;
                    this.cardSecond = null;
                }
            }

            // if (itemArray.para === true) {
            //     this.infoForBigCard = itemArray
            //     // setTimeout(() => {
            //         this.showBigCard = true
            //     // }, 1000);
            // }


            if (itemArray.para === true) {
              this.countPara++;
              if (this.countPara === 12) {
                this.allPara = true
              }
            }


        },
    },
}
</script>

<style lang="scss">
.wrap-card-enter-active {
    animation: wrap-card-leave 1s;
}

.wrap-card-leave-active {
    animation: wrap-card-in 0.3s ease;
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
    animation: bounce-in 1s;
}

.bounce-leave-active {
    animation: bounce-leave 1s ease;
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
    }

    100% {
        opacity: 0;
    }
}

.wrap {
    // width: 74rem;
    width: 82.2223rem;
    margin: 0 8rem 10.875rem 8rem;
}

.wrap-cards {
    display: flex;
    flex-wrap: wrap;
    // gap: 2rem;
    gap: 2.2223rem;
}
</style>