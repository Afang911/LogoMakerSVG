import('inquirer').then(async ({ default: inquirer }) => {
    const fs = require('fs');
    const { Triangle, Circle, Square } = require('./lib/shapes');