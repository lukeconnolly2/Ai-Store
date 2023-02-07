import {Link} from "react-router-dom"
export default function Home() {
  return (
    <div class="relative overflow-hidden bg-bgdark h-screen">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div class="sm:max-w-lg">
              <h1 class="font text-4xl font-bold tracking-tight text-alt sm:text-6xl">Blender Store</h1>
              <p class="mt-4 text-xl text-primary">Ai Collections Store</p>
            </div>
            <div>
              <div class="mt-10">
                <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://openai-labs-public-images-prod.azureedge.net/user-UARF4Tqmp4wCXZ1Yfg4bAMLv/generations/generation-dV1GqcCQuRvdYtMOOE9E1emu/image.webp" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <a href="http://google.com"><img src="https://openai-labs-public-images-prod.azureedge.net/user-lp4MdqxmcRXcI3cErrBC2vLa/generations/generation-bmUOhLqSuJNNHldHb2bqLPaK/image.webp" alt="" class="h-full w-full object-cover object-center" /></a>
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://openai-labs-public-images-prod.azureedge.net/user-NAZsMi4tQESBsVHkvlrMKuXK/generations/generation-UdcHe3erWdQEwVXpiSM3wNmq/image.webp" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://openai-labs-public-images-prod.azureedge.net/user-I9ewDWiqYMFeJcW7UYBSFfiN/generations/generation-ht6W4ndNyP4RW36tCPIvcvEV/image.webp" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 hover:scale-110 duration-500">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://openai-labs-public-images-prod.azureedge.net/user-mrnoRTpfQ4iNLHTq3Y8L6glu/generations/generation-PvgHLcZbEF2Aoboy4rwoJbeM/image.webp" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/products" class="inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary">Shop Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
