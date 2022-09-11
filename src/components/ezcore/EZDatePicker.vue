<template>
    <EZDialog titleText="Date Picker" width="400px" @onClose="$emit('onClose')">
        <EZGroup layout="v" noSelect="true" width="100%" gap="10px">
            <EZGroup hJustify="space-between" width="100%">
                <EZButton padding="10px" boxShadow="0 0 5px var(--theme-main)" @click="prevYear(...cpSelectDate)">
                    <EZGroup class="symbol-arrow-left" />
                    <EZGroup class="symbol-arrow-left" />
                </EZButton>
                <EZButton padding="10px" boxShadow="0 0 5px var(--theme-main)" @click="prevMonth(...cpSelectDate)">
                    <EZGroup class="symbol-arrow-left" />
                </EZButton>
                <EZLabel>{{refSelectDate}}</EZLabel>
                <EZButton padding="10px" boxShadow="0 0 5px var(--theme-main)" @click="nextMonth(...cpSelectDate)">
                    <EZGroup class="symbol-arrow-right" />
                </EZButton>
                <EZButton padding="10px" boxShadow="0 0 5px var(--theme-main)" @click="nextYear(...cpSelectDate)">
                    <EZGroup class="symbol-arrow-right" />
                    <EZGroup class="symbol-arrow-right" />
                </EZButton>
            </EZGroup>
            <EZGroup width="100%">
                <EZGroup width="calc(100% / 7)" v-for="i in refWeek.split(',')" hJustify="center" vJustify="center"
                    padding="5px">
                    {{i}}
                </EZGroup>
            </EZGroup>
            <EZGroup width="100%">
                <EZGroup width="calc(100% / 7)" v-for="i in refDateArray" hJustify="center" vJustify="center"
                    padding="5px">
                    <EZLabel v-if="i" cursorEnable="true" @click="refSelectDate=i" border="1px solid white"
                        borderRadius="5px" padding="2px" width="40px" height="30px" hJustify="center" :class="[
                        checkCurrrentDate(i)?'currentDate':'', 
                        refSelectDate==i?'selectDate':''
                        ]">
                        {{i.split('-')[2]}}
                    </EZLabel>
                </EZGroup>
            </EZGroup>
        </EZGroup>
        <EZGroup hJustify="space-between" width="100%">
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)" @click="chooseCurrentDate">
                <EZLabel color="white" size="1em">Choose Current Date</EZLabel>
            </EZButton>
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)"
                @click="$emit('onClose', refSelectDate)">
                <EZLabel color="white" size="1em">OK</EZLabel>
            </EZButton>
        </EZGroup>
    </EZDialog>
</template>

<script setup>
import EZDialog from './EZDialog.vue';
import EZLabel from './EZLabel.vue';
import EZButton from './EZButton.vue';
import EZGroup from './EZGroup.vue';
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity';
const emit = defineEmits(['onClose'])
const refWeek = ref('日,一,二,三,四,五,六')
const refDateArray = ref(null)
const refSelectDate = ref('')
const refCurrentDate = ref('')
onMounted(() => {
    var now = new Date(),
        date = now.getDate(),
        month = now.getMonth() + 1,
        year = now.getFullYear(),
        arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
    refCurrentDate.value = refSelectDate.value
})

const fillArray = function (year, month) {
    const firstDay = new Date(year, month - 1, 1).getDay(),
        lastDay = new Date(year, month, 0).getDate(),
        arr = new Array(42);

    for (let i = 0, j = firstDay; i < lastDay; i++, j++) {
        arr[j] = year + '-' + month + '-' + (i + 1);
    }
    return arr;
};

const nextMonth = function (year, month, date) {
    month = month + 1;
    if (month > 12) {
        year += 1;
        month = 1;
    }
    const arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
}

const prevMonth = function (year, month, date) {
    month = month - 1;
    if (month < 0) {
        year -= 1;
        month = 12;
    }
    const arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
}

const nextYear = function (year, month, date) {
    year = year + 1;
    const arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
}

const prevYear = function (year, month, date) {
    year = year - 1;
    const arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
}

const chooseCurrentDate = function () {
    const [year, month, date] = refCurrentDate.value.split('-')
    const arr = fillArray(year, month);
    updateCalendar(year, month, date, arr);
}

const checkCurrrentDate = function (date) {
    const [year1, month1, date1] = refCurrentDate.value.split('-')
    const [year2, month2, date2] = refSelectDate.value.split('-')
    return year1 == year2 && month1 == month2 && date.split('-')[2] == date1
}

const cpSelectDate = computed({
    get: () => refSelectDate.value.split('-').map(n => parseInt(n)),
})

const updateCalendar = function (year, month, date, arr) {
    refDateArray.value = arr
    refSelectDate.value = arr.filter(d => d && d.split('-')[2] == date)[0]
};
</script>

<style scoped>
.symbol-arrow-left {
    position: relative;
    left: 1px;
    top: 0px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(135deg);
}

.symbol-arrow-right {
    position: relative;
    left: 0px;
    top: 0px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(315deg);
}

.currentDate {
    border: 1px solid var(--theme-main);
    border-radius: 5px;
    padding: 2px;
    color: var(--theme-main);
}

.selectDate {
    border: 1px solid var(--theme-main);
    border-radius: 5px;
    padding: 2px;
    color: white;
    background-color: var(--theme-main);
    box-shadow: 0 0 5px var(--theme-main);
}
</style>