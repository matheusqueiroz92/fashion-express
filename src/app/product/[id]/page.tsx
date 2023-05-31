"use client"

import SingleProduct from "@/components/SingleProduct";
import { ButtonBack } from "@/components/Buttons/ButtonBack";
import { DefaultLayout } from "@/components/DafaultLayout";
import { styled } from "styled-components";

export default function ProdutoEspecifico({params} : {params: {id: string}}) {
  const ContainerProduct = styled.div`
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
    gap: 24px;
  `

  return (
    <DefaultLayout>
      <ContainerProduct>
        <ButtonBack navigate="/" />
        <SingleProduct id={params.id}/>
      </ContainerProduct>
    </DefaultLayout>
  )
}

// acrescentar avaliação, favoritos, comentários