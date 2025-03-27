# Average Rating Library

**@batya__002/average-rating** is a simple JavaScript library that extends the array prototype to calculate the average rating of numerical values.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Installation

You can install the package using either `npm` or `yarn`:

```bash
# Using npm
npm i @batya__002/average-rating

# Using yarn
yarn add @batya__002/average-rating
```

## Usage

You can use the 

```bash
import "@batya__002/average-rating'
```

## Examples

```bash
const arr = [20,30,50,"100", true, {id:1}]

console.log(arr.averageRating()); // 50.25
console.log(arr.averageRating(true)); // 50
