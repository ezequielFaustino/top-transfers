const topTransfers = [
  {player: 'Arthur', from: 'Grêmio', to: 'Barcelona', amount: 40_000000},
  {player: 'Lucas Moura', from: 'São Paulo', to: 'PSG', amount: 43_000000},
  {player: 'Rodrygo', from: 'Santos', to: 'Real Madrid', amount: 45_000000},
  {player: 'Vinícius Júnior', from: 'Flamengo', to: 'Real Madrid', amount: 45_000000},
  {player: 'Endrick', from: 'Palmeiras', to: 'Real Madrid', amount: 72_000000},
  {player: 'Vitor Roque', from: 'Athletico-PR', to: 'Barcelona', amount: 74_000000},
  {player: 'Neymar', from: 'Santos', to: 'Barcelona', amount: 88_400000},
]

const renderTransfers = () => {
  const transfersList = document.querySelector('[data-js="transfers-list"]')
  const topBuyers = document.querySelector('[data-js="top-buyers"]')
  const buyersFragment = document.createDocumentFragment()
  
  const realBought = topTransfers.filter(({to}) => to === 'Real Madrid' )
  realBought.forEach(({player, from, to}) => {
    const li = document.createElement('li')
    li.textContent = `${player}; do ${from}; para o ${to}.`
    buyersFragment.append(li)
  })

  topBuyers.append(buyersFragment)

  

}

renderTransfers()