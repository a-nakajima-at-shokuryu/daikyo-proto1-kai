import React from 'react';
import UriageDenpyoNyuryokuLayout, { useOptions } from './UriageDenpyoNyuryokuLayout';
import { BottomNavigationAction } from '@material-ui/core';

export default {
  title: '売上電溶入力（レイアウト）', 
}

export const Default = () => {
  const title = '売上伝票　入力（枚数）'

  const busho = useOptions(
    { id: '40', name: '営業所Ｃ', }, {
      label: '部署', 
      options: [
        { id: '40', name: '営業所Ｃ', }, 
        { id: '50', name: '営業所Ｄ', }, 
        { id: '60', name: '営業所Ｅ', }, 
      ], 
    });
  
    const tanto = useOptions(
    { id: '23', name: '中野', }, {
      label: '担当', 
      options: [
        { id: '23', name: '中野', }, 
        { id: '24', name: '大村', }, 
        { id: '25', name: '小山', }, 
      ], 
    });
  
    const baibai = useOptions(
    { id: '0', name: '外部', }, {
      label: '売買区分', 
      options: [
        { id: '0', name: '外部', }, 
        { id: '1', name: '内部', }, 
      ], 
    });

  const azukari = useOptions(
    { id: '0', name: '通常', }, {
      label: '預り区分', 
      options: [
        { id: '0', name: '通常', }, 
        { id: '1', name: '預り', }, 
      ], 
    });

  const henpin = useOptions(
    { id: '0', name: '通常', }, {
      label: '返品区分', 
      options: [
        { id: '0', name: '通常', }, 
        { id: '1', name: '返品', }, 
      ], 
    });

  const shoribi = useOptions(Date.now(), {
    label: '処理日', 
  });

  const hasseibi = useOptions(Date.now(), {
    label: '発生日', 
  });

  const furikaebi = useOptions(Date.now(), {
    label: '振替日', 
  });

  const nissu = useOptions(2, {
    label: '日数', 
  });
  
  const tokunoOption = useOptions(
    { id: '0', name: '担当', }, {
      label: '得意先', 
      options: [
        { id: '0', name: '担当', }, 
        { id: '1', name: '全件', }, 
      ], 
    });

  const haitanto = useOptions({
    id: 1, 
    name: 'XXXXXXXXXXXXXXXX - 1'
  }
  , {
    label: '配担当', 
    options: [
      ...Array(10).fill(0).map((_, i) => ({
        id: `${i + 1}`, 
        name: `XXXXXXXXXXXXXXXX - ${i + 1}`
      }))
    ], 
  });

  const shukkobi = useOptions(Date.now(), {
    label: '出庫日', 
  });

  const meihenbi = useOptions(Date.now(), {
    label: '名変日', 
  });

  const tokuno = useOptions({
    id: 1001, 
    name: 'XXXXXXXXXXXXXXXXXXXXXXX - 1001'
  }, {
    label: '得意先', 
    options: [
      ...Array(20).fill(0).map((_, i) => ({
        id: `${1000 + i + 1}`, 
        name: `XXXXXXXXXXXXXXXXXXXXXXX ${1000 + i + 1}`
      })), 
    ], 
  }); 

  const zeiku = useOptions(
    { id: '0', name: '外税 8%'}, {
      label: '税区分', 
      options: [
        { id: '0', name: '外税 8%'}, 
        { id: '1', name: '外税10%'}, 
        { id: '2', name: '内税 8%'}, 
        { id: '3', name: '内税10%'}, 
      ], 
    }); 

  const shoriButton = {
    label: '処理', 
    onClick: e => {
      console.log('*** submit!! ***');
    }, 
  };
  
  return (
    <UriageDenpyoNyuryokuLayout
      {...{
        title, 
        busho, 
        tanto, 
        baibai, 
        azukari, 
        henpin, 
        shoribi, 
        hasseibi, 
        furikaebi, 
        nissu, 
        tokunoOption, 
        haitanto, 
        shukkobi, 
        meihenbi, 
        tokuno, 
        zeiku, 
        shoriButton, 
      }}
    />
  );
};