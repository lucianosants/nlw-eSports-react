import './styles/main.css';

import { MagnifyingGlassPlus } from 'phosphor-react'

import LogoImg from './assets/logo-nlw-esports.svg';


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={LogoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>

        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />

            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
