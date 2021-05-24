#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cycle in it
 * @list: A singly-linked list.
 * Return: Int 0 || 1
 */
int check_cycle(listint_t *list)
{
    listint_t *turtle, *hare;

    if (!list || !list->next)
        return (0);

    turtle = list->next;
    hare = list->next->next;

    while (turtle && hare && hare->next)
    {
        if (turtle == hare)
            return (1);

        turtle = turtle->next;
        hare = hare->next->next;
    }

    return (0);
}
