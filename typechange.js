onSwitchIn: function (pokemon) {
       let changed = {'Blastoise':true, 'Blastoise-Mega':true, 'Chimecho': true, 'Arbok':true, 'Meganium':true, 'Feraligatr':true, 'Sunfora':true, 'Granbull':true, 'Ursaring':true, 'Bellossom':true, 'Noctowl':true,'Masquerain':true, 'Ninjask':true, 'Delcatty':true, 'Volbeat':true, 'Illumise':true, 'Zangoose':true, 'Seviper':true, 'Absol-Mega':true, 'Luvdisc':true, 'Milotic':true, 'Tropius':true, 'Flygon':true, 'Solrock':true, 'Staraptor':true, 'Luxray':true, 'Cherrim-Sunshine':true, 'Watchog':true, 'Garbodor':true, 'Accelgor':true, 'Cryogonal':true,'Heatmore':true, 'Haxorus':true, 'Aromatisse':true, 'Gumshoos':true, 'Lurantis':true, 'Oranguru':true};
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
