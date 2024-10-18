import React from 'react'

const latestPosts = [
  {
    id: 1,
    title: 'Primer Post',
    date: '2023-10-01',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-10-02',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 3,
    title: 'Tercer Post',
    date: '2023-10-03',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 4,
    title: 'Cuarto Post',
    date: '2023-10-04',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  }
]

const Aside = () => {
  return (
    <div className='md:mt-12 mt-1 pr-12 pl-6'>
      <h4 className='mb-4 text-[#0A0330] text-2xl'>Últimos post :</h4>

      {latestPosts.map(post => (
        <div key={post.id} className='flex mb-4 bg-white rounded shadow-lg border'>
          <div className='w-1/4'>
            <img src={post.image} alt={post.title} className='w-24 h-24' />
          </div>
          <div className='w-3/4'>
            <h3 className='text-[#0A0330] pl-2 mt-3'>{post.title}</h3>
            <p className='text-gray-600 pl-2'>{post.date}</p>
          </div>
        </div>
      ))}

<div className='mt-6 mb-6'>
<spam className='mb-4 text-[#0A0330] text-2xl'> Tag populares:</spam>
<div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Cultura', 'Gatronomía', 'Viajes', 'Eventos', 'Novedades'].map(tag => (
                    <button 
                        key={tag} 
                        className="bg-[#0A0330] text-white px-4 py-2 rounded hover:bg-[#FF4A5A]"
                    >
                        {tag}
                    </button>
                ))}
            </div>
            </div>

    </div>
  )
}

export default Aside