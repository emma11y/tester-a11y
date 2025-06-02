// @ts-check
import { test, expect } from '@playwright/test';

test.describe('cas-pratique-1', async () => {
  test('le thème sombre devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color et bg-color', async ({
    page,
  }) => {
    await page.goto('./cas-pratique-1');

    // Thème sombre
    await page.evaluate(() =>
      document.documentElement.setAttribute('data-selected-theme', 'dark')
    );

    const { color, bgColor } = await getVars(page);

    console.log(color, bgColor);
    const ratioForDarkTheme = getRatio(color, bgColor);
    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });

  test('le thème clair devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color et bg-color', async ({
    page,
  }) => {
    await page.goto('./cas-pratique-1');

    // Thème clair
    await page.evaluate(() =>
      document.documentElement.setAttribute('data-selected-theme', 'light')
    );

    const { color, bgColor } = await getVars(page);

    console.log(color, bgColor);
    const ratioForLightTheme = getRatio(color, bgColor);
    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });
});

// Récupérer les styles calculés de l'élément html
async function getVars(page) {
  return await page.evaluate(() => {
    const html = document.documentElement;
    const style = getComputedStyle(html);
    return {
      color: style.color,
      bgColor: style.backgroundColor,
    };
  });
}

function luminance(rgb) {
  return rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
}

// Fonction utilitaire pour calculer le ratio de contraste
function contrast(rgb1, rgb2) {
  const lum1 = luminance(rgb1);
  const lum2 = luminance(rgb2);
  const L1 = 0.2126 * lum1[0] + 0.7152 * lum1[1] + 0.0722 * lum1[2];
  const L2 = 0.2126 * lum2[0] + 0.7152 * lum2[1] + 0.0722 * lum2[2];
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

// Fonction pour convertir une couleur CSS rgb(a) en tableau [r, g, b]
function parseRgb(str) {
  const match = str.match(/rgba?\((\d+), (\d+), (\d+)/);
  if (!match) throw new Error('Format de couleur non reconnu');
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

// Si les variables sont définies en format hexadécimal, il faut les convertir en RGB
function hexToRgb(hex) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) throw new Error('Format hexadécimal non reconnu');
  return [
    parseInt(match[1], 16),
    parseInt(match[2], 16),
    parseInt(match[3], 16),
  ];
}

// Utilise la fonction parseRgb si la couleur est en rgb(), sinon hexToRgb
function parseColor(str) {
  if (str.startsWith('rgb')) {
    return parseRgb(str);
  } else if (str.startsWith('#')) {
    return hexToRgb(str);
  }
  throw new Error('Format de couleur non reconnu');
}

function getRatio(value1, value2) {
  const color = parseColor(value1);
  const background = parseColor(value2);

  return contrast(color, background);
}
