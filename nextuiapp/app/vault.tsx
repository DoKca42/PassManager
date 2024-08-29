"use client";
import React, { useEffect } from 'react';
import { NextUIProvider, Card, Skeleton } from '@nextui-org/react';

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

    return () => {
      window.removeEventListener('resize', adjustContainerWidth);
    };
  }, []);

  const skeletonCards = Array.from({ length: 5 }).map((_, index) => (
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

  return (
    <NextUIProvider>
      <div className="flex gap-4 items-center flex-col w-full" style={{ padding: '20px', margin: 'auto' }}>
        <div className="w-full items-center flex flex-col">
          <h1 className="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-8xl dark:text-white">VAULTS</h1>
        </div>
        <div className="w-full items-center flex flex-row flex-wrap" id="container_vault">
          {skeletonCards}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Vault;