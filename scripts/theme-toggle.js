document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
  
    // Leer el tema preferido del almacenamiento local
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(currentTheme);
  
    themeToggleButton.addEventListener('click', (event) => {
      // Prevenir cualquier comportamiento predeterminado
      event.preventDefault();
  
      // Alternar entre los temas
      const newTheme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
  
      // Guardar la preferencia en el almacenamiento local
      localStorage.setItem('theme', newTheme);
    });
  });
  
  