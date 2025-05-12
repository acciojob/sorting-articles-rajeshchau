const bands = [
        'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
        'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
        'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
        'Anywhere But Here', 'An Old Dog'
      ];

      // Remove articles for sorting
      function stripArticle(name) {
        return name.replace(/^(a |an |the )/i, '').trim();
      }

      // Sort the bands
      const sorted = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

      // Append to the only <ul> in body
      const ul = document.querySelector('ul');
      sorted.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        ul.appendChild(li);