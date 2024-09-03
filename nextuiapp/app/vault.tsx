  "use client";
  import React, { useEffect} from 'react';
  import { NextUIProvider, Card, Skeleton , Chip} from '@nextui-org/react';
  import {Image} from "@nextui-org/image";
  import locker from './media/img/locker2.svg';
  import { Scrollbars } from 'react-custom-scrollbars';
  import SimpleBar from 'simplebar-react';
  import 'simplebar-react/dist/simplebar.min.css';
  import './style.css';

  const Vault = () => {
    useEffect(() => {
      

      function adjustContainerWidth() {
        const container = document.getElementById('container_vault');
        if (!container) return;

        if (window.innerWidth > 1300) {
          container.style.width = '1248px';
        } else if (window.innerWidth > 900) {
          container.style.width = '832px';
        } else {
          container.style.width = '416px';
        }
      }

      adjustContainerWidth();

      window.addEventListener('resize', adjustContainerWidth);

    /*  const scrollableElement = document.getElementById('scrollable_a');
    if (scrollableElement) {
      const scrollInstance = new Scroll(scrollableElement);
    }*/

      return () => {
        window.removeEventListener('resize', adjustContainerWidth);
      };
    }, []);

    const skeletonCards = Array.from({ length: 4 }).map((_, index) => (
      <Card className="w-[400px] space-y-5 p-4 m-2" radius="lg" key={index}>
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    ));

    const vaultsCards = Array.from({ length: 1 }).map((_, index) => (
      <Card className="w-[400px] space-y-5 m-2" radius="lg" key={index}>
        <div className='w-full flex flex-row items-center p-4' style={{background: '#27272a;'}}>
          <Image
            width={80}
            alt="Home"
            src={locker.src}
          />
          <div className='w-full flex flex-col justify-between ml-4 pl-1'  style={{ height: '64px' }}>
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900dark:text-white" style={{ fontWeight: '600' }}> Administratif</h2>
          <div className='w-full flex flex-row items-center'>
            <Chip color="warning" variant="flat"><p>512</p></Chip> 
            <p className="text-1xl md:text-1xl lg:text-1xl leading-none tracking-tight text-gray-900dark:text-white pl-1.5" style={{ fontWeight: '400' }}>Items</p>
          </div>
          </div>
        </div>
        <div className='w-full px-2'>
          <SimpleBar data-simplebar-auto-hide="false" className='w-full flex flex-col items-start px-2' style={{ height: 70 }}>
            <p>Description:</p>
            <p className='ml-0.5'>Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.</p>
          </SimpleBar>
        </div>


        <div className="space-y-3">

        </div>
      </Card>
    ));

    return (
      <NextUIProvider>
        <div className="flex gap-4 items-center flex-col w-full" style={{ padding: '20px', margin: 'auto' }}>
          <div className="w-full items-center flex flex-col">
            <h1 className="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-8xl lg:text-8xl dark:text-white">VAULTS</h1>
          </div>
          <div className="w-full items-center flex flex-row flex-wrap" id="container_vault">
            {vaultsCards}
            {skeletonCards}
          </div>
        </div>
      </NextUIProvider>
    );
  };

  export default Vault;