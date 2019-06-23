onSwitchIn: function (pokemon) {
       let changed = {'Chimecho': true, 'Arbok':true, 'Meganium':true, 'Feraligatr':true, 'Sunfora':true, 'Granbull':true, 'Ursaring':true, 'Bellossom':true, ''Noctowl':true, 'Volbeat':true, 'Blastoise-Mega':true, 'Illumise':true, 'Absol-Mega':true, 'Luvdisc':true, 'Milotic':true, 'Tropius':true, 'Flygon':true, 'Luxray':true, 'Cherrim-Sunshine':true, 'Aromatisse':true};
       let bt = pokemon.baseTemplate;
       if (bt.baseSpecies in changed || (bt.actualSpecies && bt.actualSpecies in changed)) {
         let types = bt.types;
         let bTypes = (types.length === 1 || types[1] === 'caw') ? types[0] : types.join('/');
         this.add('-start', pokemon, 'typechange', bTypes, '[silent]');
       }
       if (bt.actualSpecies) this.add('-start', pokemon, bt.actualSpecies, '[silent]'); //Show the pokemon's actual species
     },
     onSwitchOut: function (pokemon) {
       if (pokemon.baseTemplate.actualSpecies) this.add('-end', pokemon, pokemon.baseTemplate.actualSpecies, '[silent]');
     },
   },
