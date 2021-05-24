#include <Python.h>

/**
 * print_python_list_info - prints info about python lists
 * @p: a pointer to a python object
 */

void print_python_list_info(PyObject *p)
{
	int i, size = Py_SIZE(p), alloc = ((PyListObject *)p)->allocated;
	PyObject *obj;

	printf("[*] Size of the Python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc);

	for (i = 0; i < size; i++)
		printf("Element %d: ", i),
			obj = PyList_GetItem(p, i),
			printf("%s\n", Py_TYPE(obj)->tp_name);
}
