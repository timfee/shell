import { NextPage } from 'next'
import { Component, FC } from 'react'

export type NextPageWithLayout = NextPage<{ layout?: FC | Component }>
