const topTransfers = [
  {player: 'Arthur', from: 'Grêmio', to: 'Barcelona', amount: 40},
  {player: 'Lucas Moura', from: 'São Paulo', to: 'PSG', amount: 43},
  {player: 'Rodrygo', from: 'Santos', to: 'Real Madrid', amount: 45},
  {player: 'Vinícius Júnior', from: 'Flamengo', to: 'Real Madrid', amount: 45},
  {player: 'Endrick', from: 'Palmeiras', to: 'Real Madrid', amount: 72},
  {player: 'Vitor Roque', from: 'Athletico-PR', to: 'Barcelona', amount: 74},
  {player: 'Neymar', from: 'Santos', to: 'Barcelona', amount: 88},
]

const realBought = topTransfers.filter(({to}) => to === 'Real Madrid' )
const barcaBought = topTransfers.filter(({to}) => to === 'Barcelona')

const realSpent = realBought.reduce((accumulator, {amount}) => accumulator + amount, 0)
console.log(realSpent);

const renderTransfers = () => {
  const transfersList = document.querySelector('[data-js="transfers-list"]')
  const topBuyers = document.querySelector('[data-js="top-buyers"]')
  const buyersFragment = document.createDocumentFragment()
  const transfersFragment = document.createDocumentFragment()

  topTransfers.forEach(({player, from, to, amount}) => {
    const li = document.createElement('li')
    li.textContent = `${player}; do ${from}; para o ${to}; €${amount} milhões.`
    
    transfersFragment.append(li)
  })

  realBought.forEach(({player, from, to}) => {
    const li = document.createElement('li')
    li.textContent = `${player}; do ${from}; para o ${to}.`
    buyersFragment.append(li)
  })

  barcaBought.forEach(({player, from, to}) => {
    const li = document.createElement('li')
    li.textContent = `${player}; do ${from}; para o ${to}.`
    
    buyersFragment.append(li)
  })

  topBuyers.append(buyersFragment)
  transfersList.append(transfersFragment)
  

}

renderTransfers()