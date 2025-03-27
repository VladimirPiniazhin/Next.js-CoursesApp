import { TopLevelCategory } from '@/interfaces/page.interface';
import { API } from '../app/api';
import { MenuItem } from '../interfaces/menu.interface';


export async function getMenu(firstCategory: TopLevelCategory): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({ firstCategory }),
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 10,
      },
    });
    return res.json();
  }