import store from './store.png'
import incenseSticks from './incense-sticks.png'
import candy from './candy.png'
import money from './money.png'
import juice from './juice.png'
import mobile from './mobile.png'
import coins from './coins.png'
import heart from './heart.png'
import stocks from './stocks.png'
import pig from './pig.png'
const mappings = {
	"shop": store,
	"incenseSticks": incenseSticks,
	"candy": candy,
	"money": money,
	"juice": juice,
	"mobile": mobile,
	"coins": coins,
	"heart": heart,
	"stocks": stocks,
	"pig": pig,
} as const
export type ElementsType = keyof typeof mappings;
export default mappings